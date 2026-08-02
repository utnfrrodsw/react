## Why

`hook-use-reducer/src/App.jsx` is dead code: the entry point `main.jsx` renders the `Carrito` cart component and only references `App` in commented-out lines. `App.jsx` is still the default Vite scaffold (counter demo with Vite/React logos), which is confusing for a course example that teaches `useReducer`. It pulls in `App.css` and `assets/react.svg` that nothing else uses. Removing it cleans up the project and makes it a self-contained `useReducer` demo.

## What Changes

- Delete `hook-use-reducer/src/App.jsx` (the unused Vite scaffold component)
- Delete `hook-use-reducer/src/App.css` (only imported by the deleted component)
- Delete `hook-use-reducer/src/assets/react.svg` (only imported by the deleted component)
- Remove the commented-out `import App` and `<App />` lines from `hook-use-reducer/src/main.jsx`

No behavior change: the rendered UI (`Carrito`) stays identical.

## Capabilities

### New Capabilities

None — no new capability is introduced.

### Modified Capabilities

None — no existing capability's requirements change. This is a pure refactor (dead-code removal), declared via `skip_specs: true` in `.openspec.yaml`.

## Impact

- **Affected code:** `hook-use-reducer/` only
  - Deleted: `src/App.jsx`, `src/App.css`, `src/assets/react.svg`
  - Edited: `src/main.jsx` (remove commented references)
- **Kept:** `src/components/Carrito.jsx`, `src/components/Carrito.css`, `src/index.css`, `index.html` (`/vite.svg` favicon stays — still referenced by `index.html`)
- **Dependencies:** none added or removed
- **Build:** unaffected (`npm run build` should pass with an unchanged bundle output)
