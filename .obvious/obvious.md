# three-particles — Agent Guidance

Particle engine for THREE.js. Lerna + npm monorepo with two workspaces:
the published `three-particles` library and a private Vite example app.

## Stack

- **Runtime:** Node.js 22 (CI matrix uses 22.x), npm
- **Monorepo:** Lerna (independent versioning), npm workspaces
- **Library:** TypeScript, esbuild bundling (via `tsx buildSrc/build.ts`), Jest tests
- **Example app:** Vite, depends on the workspace `three-particles` package
- **No external services** — no database, no env vars required

## Commands (from repo root)

| Command | What it does |
|---|---|
| `npm ci` | Install dependencies (uses package-lock.json) |
| `npx tsc -p packages/three-particles` | Emit type declarations to `packages/three-particles/dist/types/5.8` |
| `npm run build` | Build both packages (lerna; esbuild bundle + Vite build) |
| `npm run lint` | Prettier check + ESLint (type-checked rules) |
| `npm test` | Jest unit tests for the library (lerna) |
| `npm run validate` | build + lint + test (same as CI) |
| `npm run serve` | Serve the built `www/` output with http-server |
| `npm run watch` | Parallel watch builds |

### Dev server (example app)

```bash
cd packages/example && npx vite --host
```

Serves on **http://localhost:5173/** (parsed from Vite startup output). The page
loads the "THREE.js Particles Fire Example" canvas. Note: lint of the example
requires the library's type declarations to exist — run
`npx tsc -p packages/three-particles` first if `dist/types/5.8` is missing
(the esbuild `build` script does not emit them).

## Codebase map

See [codebase-map.md](./codebase-map.md).

## Local verification

1. `npm run validate` — build, lint, and tests must pass.
2. Start the Vite dev server (commands above) and fetch `http://localhost:5173/`
   — expect HTTP 200 and Vite transform of `/src/index.ts` returning HTTP 200.
3. Last verified: 2026-09-24 — build ✓, lint ✓, Jest 47/47 ✓, dev server ✓.

## Snapshot

- **Snapshot ID:** `u86i1bx2uzoh8d2etp71:default`
- **Captured:** 2026-09-24T18:32:52.935Z (fresh onboarding setup with
  dependencies installed and declarations emitted; dev server was running)
