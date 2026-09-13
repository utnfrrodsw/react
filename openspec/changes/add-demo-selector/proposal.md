## Why

In `hook-use-effect`, showing each example (MemeFetcher, MemeFetcherV2, MemeFetcherV3, Productos) currently requires commenting/uncommenting JSX in `src/App.jsx` and `src/main.jsx`. This is error-prone, easy to forget to revert, and adds noise to the commit history. We want to switch between demos at runtime without touching code.

## What Changes

- `src/App.jsx` becomes a demo selector: renders a set of navigation buttons/tabs and mounts only the currently selected demo component.
- The four demos are shown in this order: `MemeFetcher`, `MemeFetcherV2`, `MemeFetcherV3`, `Productos`.
- A "Mostrar/Ocultar demo" toggle button mounts and unmounts the selected demo at runtime, preserving the previous `setShowMemes` teaching aid for explaining component mount/unmount and effect cleanup.
- `src/main.jsx` unconditionally wraps the app in `QueryClientProvider` with a single `QueryClient` (required by both `MemeFetcherV3` via `useMemes` and `Productos`). No more commented-out providers.
- Fix `src/hooks/useFetch.jsx`: guard all state updates with a `cancelled` flag so the aborted fetch under StrictMode's double-effect cannot leave `{ loading: false, data: null }` and crash `MemeFetcherV2` (blank screen).
- No changes to the demo components themselves (`MemeFetcher.jsx`, `MemeFetcherV2.jsx`, `MemeFetcherV3.jsx`, `Products.jsx`) or to `useQuery.jsx`.

## Capabilities

### New Capabilities

- `demo-selector`: Runtime switching between the teaching examples of `hook-use-effect` (MemeFetcher, MemeFetcherV2, MemeFetcherV3, Productos) via a UI control, without editing source code. Includes the app-wide `QueryClientProvider` setup required by the react-query demos.

### Modified Capabilities

## Impact

- `hook-use-effect/src/App.jsx` — rewritten as the demo selector (keeps its current title/header) plus the mount/unmount toggle.
- `hook-use-effect/src/main.jsx` — simplified to always provide `QueryClientProvider`; commented imports removed.
- `hook-use-effect/src/App.css` — minor additions for the selector and toggle buttons.
- `hook-use-effect/src/hooks/useFetch.jsx` — abort-safe state updates (`cancelled` guard).
- Runtime behavior unchanged for each individual demo; only how they are reached changes.
