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

| Command                               | What it does                                                        |
| ------------------------------------- | ------------------------------------------------------------------- |
| `npm ci`                              | Install dependencies (uses package-lock.json)                       |
| `npx tsc -p packages/three-particles` | Emit type declarations to `packages/three-particles/dist/types/6.0` |
| `npm run build`                       | Build both packages (lerna; esbuild bundle + Vite build)            |
| `npm run lint`                        | Prettier check + ESLint (type-checked rules)                        |
| `npm test`                            | Jest unit tests for the library (lerna)                             |
| `npm run validate`                    | build + lint + test (same as CI)                                    |
| `npm run serve`                       | Serve the built `www/` output with http-server                      |
| `npm run watch`                       | Parallel watch builds                                               |

### Dev server (example app)

```bash
cd packages/example && npx vite --host
```

Serves on **http://localhost:5173/** (parsed from Vite startup output). The page
loads the "THREE.js Particles Fire Example" canvas. Note: lint of the example
requires the library's type declarations to exist — run
`npx tsc -p packages/three-particles` first if `dist/types/6.0` is missing
(the esbuild `build` script does not emit them).

## Releases (release-PR flow)

Releases are hands-off. Every push to `main` runs `.github/workflows/release-pr.yml`:
when `npx lerna changed` reports the library is ahead of its latest
`three-particles@` tag, it bumps `packages/three-particles` (package.json,
CHANGELOG, lockfile) on a `release/vX.Y.Z` branch and opens a release PR titled
`chore(release): publish vX.Y.Z` with auto-merge (squash). The PR runs the same
required build checks as any PR. When the merge commit's message starts with
`chore(release): publish`, `release.yml` builds `packages/three-particles`
(esbuild bundle + tsc declarations), guards the publish content (`dist/index.js`
and `dist/types/6.0` declarations must exist — 0.15.2 shipped without `dist/`
and is unusable; npm versions are immutable, so a bad publish can only be
superseded), pushes the annotated `three-particles@X.Y.Z` tag, publishes
tokenless via OIDC, creates the GitHub release, and deploys `www/` to Pages.
Regular merges never publish.

- Versioning is lerna **independent** — tag format `three-particles@X.Y.Z`.
- Re-runs update the same `release/vX.Y.Z` branch/PR (`--force-with-lease`)
  instead of colliding.
- If the repo's "Allow auto-merge" setting is off, the release PR parks for
  manual merge — merging it by hand is the designed fallback, not a failure.
- npm publishing is **tokenless** via OIDC trusted publishing: the `release`
  job installs and builds on Node 22 (bundled npm 10.x matches the lockfile
  generator — npm 11's stricter `npm ci` validation rejects that lockfile),
  upgrades npm to >= 11.5.1 only for the publish step, runs with
  `id-token: write` and no
  `NODE_AUTH_TOKEN`/`registry-url`, and publishes with plain
  `npm publish --provenance` — not lerna's publish path, which prefers the
  workflow's OIDC identity over `NPM_TOKEN` and fails E404 without a Trusted
  Publisher (#54). The package's **Trusted Publisher** on npmjs.com must point
  at `polyforest/three-particles` and workflow file `release.yml`. A 403/404
  at publish usually means the npm-side Trusted Publisher config is missing or
  mismatches the workflow filename. Retry a failed publish from the Actions
  tab — **Publish release → Run workflow** on `main` with `force` checked
  (`workflow_dispatch`); re-running the original failed run replays the
  workflow file from that commit and will not pick up fixes. No npm tokens, no
  PATs, no branch-protection bypasses.

## Codebase map

See [codebase-map.md](./codebase-map.md).

## Local verification

1. `npm run validate` — build, lint, and tests must pass.
2. Start the Vite dev server (commands above) and fetch `http://localhost:5173/`
   — expect HTTP 200 and Vite transform of `/src/index.ts` returning HTTP 200.
3. Last verified: 2026-09-24 — build ✓, lint ✓, Jest 73/73 ✓ (`npm run
validate`, release-pipeline fix session); dev server verified earlier the
   same day, not re-run since.

## Snapshot

- **Snapshot ID:** `u86i1bx2uzoh8d2etp71:default`
- **Captured:** 2026-09-24T18:32:52.935Z (fresh onboarding setup with
  dependencies installed and declarations emitted; dev server was running)
