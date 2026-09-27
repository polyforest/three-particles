# three-particles usage guide

A particle engine for [THREE.js](https://threejs.org). An effect is a JSON document describing emitters — points or instanced meshes — with their textures, materials, geometries, zones, and timelines. You load the JSON, wrap it in a `ParticleEffect`, add it to your scene, and advance it once per frame.

The library is ESM-only and expects `three` `>=0.186.1 <0.187.0` as a peer dependency. Everything below reflects the public API exported from `src/index.ts`.

- Installation
- Quick start
- Loading effects
- The `ParticleEffect` runtime
- Effect JSON reference
- Textures in practice
- Materials and rendering paths
- Cleanup and lifetimes
- Known limitations
- The example app

## Installation

```bash
npm install three-particles
```

Peer range: `three >=0.186.1 <0.187.0`. Pin your `three` version inside that window — the library is tested against it, and the peer requirement is strict (note the upper bound is exclusive).

## Quick start

```ts
import { ParticleEffect, ParticleEffectLoader } from 'three-particles'

const loader = new ParticleEffectLoader()
const model = await loader.loadAsync('./fire.json')

const effect = new ParticleEffect(model)
scene.add(effect)

// Once per frame, with the frame delta in seconds:
effect.update(delta)
```

`ParticleEffect` extends `THREE.Group`, so it has a position, rotation, and scale like any other scene object. Moving the group moves the whole effect.

`fire.json` in the example app ([`packages/example/resources/fire.json`](../packages/example/resources/fire.json)) is a complete serialized effect and the reference file for the JSON format.

## Loading effects

`ParticleEffectLoader` is a standard `THREE.Loader`. The primary entry point is:

```ts
const model = await loader.loadAsync(url)
```

`loadAsync` fetches the JSON, parses it, and resolves with a `ParticleEffectModel`. Malformed JSON rejects the promise. Loading is async end to end: string-form textures, materials, and geometries referenced by URL are awaited before the promise resolves, so remote assets referenced by URL are guaranteed present at first render.

### Registries: materials, textures, geometries

An effect references assets by **id**, never inline. The loader resolves ids against merged registries, built in this order:

1. **External** registries you set on the loader — `setMaterials()`, `setTextures()`, `setGeometries()`.
2. **Bundled** registries inside the effect JSON's top-level `materials` / `textures` / `geometries` objects.

Bundled entries win over external ones on key collision. Each registry entry takes either a **blob** (a JSON description) or a **string** (a URL, fetched and awaited before load resolves). See the JSON reference below for the blob shapes.

The loader is pre-seeded with one default texture: a `radial` key holding a small canvas-generated radial gradient. Effects that reference `"radial"` (or use a `PointsMaterial` whose `map` is unset) work with zero setup.

### `setPath` and data URIs

`loader.setPath('./effects/')` prefixes every asset URL — including `data:` URIs, which it silently corrupts. If your effects bundle textures as data URIs, do not use `setPath`, or handle path joining yourself.

### Error behavior

- Corrupt values **throw at parse time**: unknown ease ids, timeline arrays with the wrong stride or non-increasing times, and emitters with more than one material.
- A material id an emitter references but that no registry defines resolves to `null` **silently**; the emitter renders untextured/unmaterialized.
- A texture id a material references but that no registry defines logs a `MaterialLoader: Undefined texture` warning and renders without the map.
- An unknown `propertyTimelines` property name warns once and does nothing.

## The `ParticleEffect` runtime

```ts
const effect = new ParticleEffect(model)
```

| Member                  | Description                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `update(deltaSeconds)`  | Advances all emitters. Call once per frame with the real frame delta.                                                     |
| `rewind()`              | Rewinds all emitters to their start.                                                                                      |
| `stop(allowCompletion)` | Stops emission; with `true`, live particles finish their lives before the effect goes quiet.                              |
| `reset()`               | Immediately resets all emitters and particles to their initial state.                                                     |
| `clone()`               | Returns a new `ParticleEffect` sharing the same model — cheap way to place a second copy of an effect.                    |
| `model`                 | The `ParticleEffectModel` this effect renders (readonly).                                                                 |
| `emittersNeedUpdate`    | Set `true` after mutating `model.emitters` (adding or removing emitters); the change is picked up on the next `update()`. |

Both render paths enable shadow casting/receiving by default and disable frustum culling, since particles can spread beyond any static bounding volume.

## Effect JSON reference

Top level — all fields optional:

| Field        | Shape                       | Notes                                                                                                                                                                                           |
| ------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`    | `string`                    | Defaults `'1.0'`. Currently decorative — parsed but not validated.                                                                                                                              |
| `emitters`   | array                       | One entry per emitter.                                                                                                                                                                          |
| `materials`  | id → blob or URL            | Blobs are [three.js `MaterialLoader` JSON](https://threejs.org/docs/#api/en/loaders/MaterialLoader) (`type` + material properties). Texture slots reference texture ids, e.g. `"map": "spark"`. |
| `textures`   | id → blob, URL, or data URI | See [Textures in practice](#textures-in-practice).                                                                                                                                              |
| `geometries` | id → blob or URL            | Blobs are three.js `BufferGeometry` JSON (what `BufferGeometryLoader` parses).                                                                                                                  |

### Emitter

| Field                    | Type         | Default         | Description                                                                                                                       |
| ------------------------ | ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `count`                  | number       | `100`           | Particle capacity.                                                                                                                |
| `enabled`                | boolean      | `true`          | Disabled emitters construct but render nothing.                                                                                   |
| `loops`                  | boolean      | `true`          | Whether the emitter restarts after completing.                                                                                    |
| `duration`               | object       | 10 s            | `{ duration, delayBefore, delayAfter }`, each a `RangeModel` in seconds: emission window, lead-in delay, and pause between loops. |
| `emissionRate`           | timeline     | 10/s            | Particles spawned per second. Timed against the emitter's duration by default.                                                    |
| `particleLifeExpectancy` | timeline     | —               | Per-particle lifetime in seconds, sampled when the particle spawns.                                                               |
| `spawn`                  | zone         | point at origin | Where particles appear.                                                                                                           |
| `rotateToOrientation`    | boolean      | `false`         | Adds the particle's orientation to its rendered rotation.                                                                         |
| `propertyTimelines`      | array        | `[]`            | Per-property animation curves — the heart of an effect.                                                                           |
| `geometry`               | id or `null` | `null`          | Key into the geometries registry. Only used by the mesh render path.                                                              |
| `material`               | id or array  | `null`          | Key (or keys) into the materials registry. Exactly one material is used; more than one throws at parse time.                      |

### Ranges

`RangeModel` — `{ min, max, ease }`, all optional. Values are sampled between `min` and `max`; `ease` shapes the distribution and must be a valid [ease id](#easing-ids) (unknown ids throw at parse time). Omitting `max` pins the value to `min`.

### Timelines

A `TimelineModel` drives one property:

| Field                | Type               | Default   | Description                                                                                                                                                                                                                                           |
| -------------------- | ------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `property`           | string             | `''`      | One of the [property ids](#property-ids), or `color`.                                                                                                                                                                                                 |
| `timeline`           | number[]           | `[]`      | Flat keyframes. Times are normalized 0–1 (clamped at both ends), strictly increasing.                                                                                                                                                                 |
| `useEmitterDuration` | boolean            | `false`   | `true` drives the curve over the emitter's duration; `false` over each particle's own lifespan. `emissionRate` and `particleLifeExpectancy` default to `true`.                                                                                        |
| `low`, `high`        | `RangeModel`       | see below | The value band the curve maps onto. `high` defaults to `low` when omitted.                                                                                                                                                                            |
| `relative`           | boolean            | `false`   | `true` treats `high` as an offset from `low` instead of an absolute value.                                                                                                                                                                            |
| `mode`               | `'set'` \| `'add'` | `'set'`   | `'add'` layers this timeline on top of the property's other timelines instead of replacing them. Only the velocity and heading-rate ids accept `'add'`.                                                                                               |
| `applyAtSpawn`       | boolean            | `false`   | `true` samples this timeline exactly once, when the particle spawns, instead of every frame: the property starts from the curve's value at time 0 and then evolves freely — e.g. a spawn heading that keeps integrating under `orientationZVel` curl. |

Float properties use stride-2 keyframes — `[time, value, time, value, …]`. The resolved value each frame is:

```
value = curve(alpha) × (high − low) + low
```

where `alpha` is the normalized emitter or particle progress and `curve` is the piecewise-linear interpolation of the keyframes.

Multiple timelines may target the same property. With the default `mode: "set"` the last non-empty timeline wins each frame. A timeline with `mode: "add"` instead contributes its resolved value on top: the property receives the SET timeline's value (if any) plus the sum of every additive timeline's value at the same instant. Additive timelines track their curve — they never accumulate an integral across frames — and each keeps its own `low`/`high` draw. Supported ids: `xVel`, `yVel`, `zVel`, `orientationXVel`, `orientationYVel`, `orientationZVel`; any other property with `mode: "add"` throws at parse time.

A timeline with `applyAtSpawn: true` initializes a property instead of driving it: the property receives the curve's value at time 0 once, when the particle spawns (sampled at the current emitter progress for `useEmitterDuration` timelines), and the timeline never applies again — velocity integration then carries the property onward. A spawn-only timeline can coexist with per-frame `mode: "add"` timelines on the same property: the additive sum rides on top of the spawn value.

The special `color` property uses stride-4 keyframes — `[time, r, g, b, …]` — with raw 0–1 channel values (not mapped through `low`/`high`). Control alpha with a separate `colorA` timeline. Wrong strides and non-increasing times throw at parse time.

### Property ids

Every id except `color` maps to one component of the particle's state:

| Ids                                                     | Drives                                                                      |
| ------------------------------------------------------- | --------------------------------------------------------------------------- |
| `x`, `y`, `z`                                           | Position (world units).                                                     |
| `xVel`, `yVel`, `zVel`                                  | Velocity, integrated into position every frame (units/s).                   |
| `scale`, `scaleX`, `scaleY`, `scaleZ`                   | Size (1 = original geometry/point size).                                    |
| `rotationX`, `rotationY`, `rotationZ`                   | Rotation (radians).                                                         |
| `rotationXVel`, `rotationYVel`, `rotationZVel`          | Angular velocity (rad/s).                                                   |
| `orientationX`, `orientationY`, `orientationZ`          | Facing direction (radians); used by `forwardVel` and `rotateToOrientation`. |
| `orientationXVel`, `orientationYVel`, `orientationZVel` | Orientation angular velocity (rad/s).                                       |
| `forwardVel`                                            | Speed along the particle's current facing direction (units/s).              |
| `colorR`, `colorG`, `colorB`, `colorA`                  | Tint channels (0–1).                                                        |
| `color`                                                 | RGB curve, stride-4 keyframes (see above).                                  |

Unknown ids warn once and no-op.

### Spawn zones

`spawn` — `{ type: 'point' | 'box' | 'ellipsoid', x, y, z, w, h, d, ease }`, all optional:

- `point` — all particles spawn at `(x, y, z)`.
- `box` — uniform in an axis-aligned box centered at `(x, y, z)` with full width/height/depth `(w, h, d)`.
- `ellipsoid` — uniform by volume in an ellipsoid centered at `(x, y, z)` with half-extents `(w/2, h/2, d/2)`.

`ease` shapes the distribution from the center toward the edge.

### Easing ids

`linear`, `quad`, `cubic`, `quart`, `quint`, `sine`, `circ`, `back`, `bounce` — each also available with an `In` / `Out` / `InOut` suffix (`cubicOut`, `sineInOut`, …). The plain name and its `In` variant behave identically.

## Textures in practice

Three ways to get a texture into an effect:

```jsonc
{
    "textures": {
        // 1. External — set on the loader, referenced by key here:
        //    loader.setTextures({ spark: myTexture })
        //    (the external map is pre-seeded with "radial")

        // 2. String — URL or data URI, fetched and awaited:
        "spark": "./spark.png",
        "smoke": "data:image/png;base64,iVBORw0KGgo…",

        // 3. Blob — inline TextureJSON (three.js TextureLoader format):
        "ember": {
            "image": "data:image/png;base64,…",
            "colorSpace": "srgb",
            "wrapS": 1000,
            "wrapT": 1000,
        },
    },
}
```

Blob entries without an `image` field produce a blank texture. Do **not** paste `THREE.Texture.toJSON()` output — its `image` field is a uuid cross-reference, which this format would treat as a URL. The blob format is a deliberate subset: inline image strings only.

Practical notes:

- **Set `colorSpace` explicitly on color textures** (e.g. `"colorSpace": "srgb"`). There is no library-level default; without it, color textures are sampled as linear data and render washed out.
- **Data URIs work natively** and make an effect fully self-contained — but see the `setPath` caveat above.
- **Point sprites ignore texture transforms.** The `Points` render path patches the point-sprite shader for per-particle rotation and in doing so drops `map`'s uv transform and `alphaMap` support: `repeat`/`offset` on the texture and `alphaMap` on the material are inert for point sprites. The instanced-mesh path handles both normally.

## Materials and rendering paths

The renderer is chosen per emitter from the first material in its `material` id list:

- A `PointsMaterial` renders the emitter as `THREE.Points` — GPU point sprites with per-particle color (including alpha) and Z-axis sprite rotation via a patched shader.
- Anything else renders as an instanced mesh — per-instance matrices and RGB colors, real geometry and lighting, and stock three.js material behavior (including `alphaMap` and uv transforms).

Materials are plain three.js `MaterialLoader` JSON blobs. `fire.json` shows a textured additive-blended `PointsMaterial`; `mesh.json` shows a lit instanced mesh with a `cube` geometry.

## Cleanup and lifetimes

The library performs no GPU-resource disposal — no `dispose()` calls anywhere in the render path — because it cannot know which resources are shared between effects. When you discard an effect permanently, dispose what you know you own:

```ts
for (const texture of Object.values(model.textures)) texture.dispose()
for (const material of Object.values(model.materials)) material.dispose()
for (const geometry of Object.values(model.geometries)) geometry.dispose()
```

Textures, materials, and geometries created by the loader are fresh instances per parse (shared geometries are cloned per emitter where sharing would corrupt buffers), so disposing a loaded model's registries will not affect unrelated effects — but will affect other `ParticleEffect`s created from the _same_ model, including `clone()`s.

## Known limitations

- **No serializer.** Effects are loaded, not written; author them in [polyforest/particles-editor](https://github.com/polyforest/particles-editor) or by hand. `version` is not validated.
- **Blob textures are not awaited.** String-form textures block `loadAsync` until decoded; blob-form textures attach their image asynchronously, so a self-contained effect can render a frame before its texture decodes.
- **Point-sprite texture transforms** (`repeat`/`offset`/`alphaMap`) are inert, as described above.
- **No per-particle texture arrays or flipbooks** — one map per material.
- **`setPath` breaks `data:` URIs.**

## The example app

[`packages/example`](../packages/example) is a Vite app demonstrating the full runtime: a `Points`-path fire and an instanced-mesh emitter side by side, with keyboard playback controls (`P` pause, `R` rewind, `S` stop, `X` reset). See its [README](../packages/example/README.md) for run instructions.
