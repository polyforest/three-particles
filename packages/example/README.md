# three-particles example

A Vite app demonstrating the `three-particles` library in a complete scene. It is also the source of the [live demo](https://polyforest.github.io/three-particles/) deployed to GitHub Pages.

## What it shows

| Effect                | Render path                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------- |
| `resources/fire.json` | `PointsMaterial` → GPU point sprites with per-particle color, alpha, and sprite rotation |
| `resources/mesh.json` | geometry + lit material → instanced mesh cubes with per-instance transforms and shadows  |

Both effects load through `ParticleEffectLoader` and are added to the scene as `ParticleEffect` groups (a `THREE.Group` subclass), positioned like any other scene object. The render loop advances them with `update(delta)`, clamping the frame delta to avoid jumps after tab switches.

## Playback controls

| Key | Action                                                          |
| --- | --------------------------------------------------------------- |
| `P` | Pause / resume — stops calling `update()` while paused          |
| `R` | `rewind()` — all emitters return to their start                 |
| `S` | `stop(true)` — stop emitting; live particles finish their lives |
| `X` | `reset()` — immediate reset to the initial state                |

## Running it

From the repo root:

```bash
npm ci
npm run build   # the example aliases three-particles to ../three-particles/dist
```

Then, for hot reload during development:

```bash
cd packages/example
npx vite --host
```

Open <http://localhost:5173>. The dev server parses the Vite startup output for the actual port if 5173 is taken.

`npm run build` in this package emits to `packages/example/dist`, which the release workflow deploys as the repo-root `www/` GitHub Pages output.

See [docs/USAGE.md](../../docs/USAGE.md) for the full usage guide, including the effect JSON format.
