# three-particles

[![Build Status](https://github.com/polyforest/three-particles/workflows/CI/badge.svg)](https://github.com/polyforest/three-particles/actions)
[![NPM Package](https://img.shields.io/npm/v/three-particles)](https://www.npmjs.com/package/three-particles)
[![NPM Downloads](https://img.shields.io/npm/dw/three-particles)](https://www.npmtrends.com/three-particles)

A particle engine for [THREE.js](https://threejs.org). An effect is a JSON document describing emitters — points or instanced meshes — with their textures, zones, and timelines. Load one, add it to your scene as a `Group`, and call `update()` once per frame.

- **Docs and live demo:** <https://polyforest.github.io/three-particles/>
- **Author effects visually** in [polyforest/particles-editor](https://github.com/polyforest/particles-editor), the companion editor for this library.

## Installation

```bash
npm install three-particles
```

The library is ESM-only and expects `three` `>=0.186.1 <0.187.0` as a peer dependency.

## Usage

```ts
import { ParticleEffect, ParticleEffectLoader } from 'three-particles'

const loader = new ParticleEffectLoader()
const model = await loader.loadAsync('./fire.json')

const effect = new ParticleEffect(model)
scene.add(effect)

// Once per frame, with the frame delta in seconds:
effect.update(delta)
```

`fire.json` is a serialized `ParticleEffectModel`. The example app in `packages/example` shows a complete scene, also deployed as the [live demo](https://polyforest.github.io/three-particles/).

## API overview

- `ParticleEffectLoader` — a standard `THREE.Loader` that fetches and parses an effect JSON file into a `ParticleEffectModel`.
- `ParticleEffect` — a `THREE.Group` wrapping the loaded model; add it to your scene and drive it with `update(deltaSeconds)`.
- `model` — the `ParticleEffectModel` schema with `parse*` helpers and defaults, for building or modifying effects in code.
- `materialDefaults` — `createCircleGradientTexture()` and `getDefaultRadial()` for stock particle textures.

Type declarations ship with the package and are referenced by its `types` field.

## Development

The repo is a Lerna monorepo with two workspaces: the `three-particles` library and a private Vite example app.

| Command            | What it does                                  |
| ------------------ | --------------------------------------------- |
| `npm ci`           | Install dependencies                          |
| `npm run build`    | Build both workspaces                         |
| `npm test`         | Jest unit tests for the library               |
| `npm run lint`     | Prettier check + ESLint                       |
| `npm run validate` | build + lint + test — the same checks CI runs |
| `npm run serve`    | Serve the built `www/` output                 |

To hack on the example app with hot reload: `cd packages/example && npx vite --host`, then open <http://localhost:5173>.

## License

[Apache-2.0](LICENSE)
