---
name: local-dev
description: How to get the three-particles repo running locally (Node/npm/Lerna monorepo, no external services)
---

# Local Dev — three-particles

Learned during onboarding onboarding run 2026-09-24.

## Steps

1. **Install:** `npm ci` from the repo root (npm workspaces + Lerna).
    - Gotcha: if `node_modules` is owned by root in a fresh sandbox,
      `npm ci` fails with EACCES. Fix with
      `sudo chown -R user:user node_modules` and re-run.
2. **Emit type declarations:** `npx tsc -p packages/three-particles`
   → writes `packages/three-particles/dist/types/6.0`. The esbuild-based
   `npm run build` does NOT generate these, and ESLint's type-checked rules
   on `packages/example/src/index.ts` fail ("'error' type") until they exist.
3. **Build:** `npm run build` (esbuild bundle for the lib, Vite build for the
   example into repo-root `www/`).
4. **Verify:** `npm run validate` (= build + lint + test). Expect Jest
   47 tests / 12 suites passing.
5. **Run the example app:** `cd packages/example && npx vite --host`
   → http://localhost:5173/ (port parsed from Vite output). Verify by
   fetching `/` and `/src/index.ts` (both HTTP 200).

## Environment

- Node.js (CI targets 22.x), npm, no external services, no env vars, no .env.
- No leftover lock files to worry about; no migrations/seeding (no database).
