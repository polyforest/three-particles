# Codebase Map

| Path                                    | Purpose                                                                                                                  |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `packages/three-particles`              | Published npm library — particle engine for THREE.js (`main: dist/index.js`, types in `dist/types/5.8`)                  |
| `packages/three-particles/src/index.ts` | Public API entry point                                                                                                   |
| `packages/three-particles/src/model`    | Data models: ParticleEffectModel, ParticleEmitterModel, RangeModel, TimelineModel, Zone                                  |
| `packages/three-particles/src/object`   | THREE.js scene objects: ParticleEffect, ParticleEmitterPoints, ParticleEmitterInstancedMesh, ParticleEmitterObject       |
| `packages/three-particles/src/state`    | Runtime state: ParticleState, ParticleEmitterState, PropertyValue                                                        |
| `packages/three-particles/src/util`     | Helpers: easing, interpolation, math, array, object, text, type                                                          |
| `packages/three-particles/buildSrc`     | esbuild build script (`npm run build` / `watch`)                                                                         |
| `packages/three-particles/test`         | Jest unit tests (model, state, util, parseTextureJson)                                                                   |
| `packages/example`                      | Private Vite demo app ("THREE.js Particles Fire Example"); `src/index.ts` is the whole app; builds into repo-root `www/` |
| `www`                                   | Build output of the example app — deployed to GitHub Pages                                                               |
| `.github/workflows`                     | `ci.yml` (build/lint/test matrix), `release.yml` (lerna version + npm publish + pages deploy)                            |
