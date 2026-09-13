## Context

`hook-use-effect` is a Vite + React 19 teaching project (JSX, no TypeScript) demonstrating progressively more abstract data-fetching approaches: raw `useEffect` + axios (`MemeFetcher`), a custom `useFetch` hook (`MemeFetcherV2`), React Query via a `useMemes` hook (`MemeFetcherV3`), and a full React Query CRUD example (`Productos`). Today the demos are switched by commenting/uncommenting JSX in `src/App.jsx` and `src/main.jsx`. See proposal.md for the motivation.

## Goals / Non-Goals

**Goals:**
- Runtime demo switching with a single source of truth for which example is active.
- React Query provider available once at the root so both React Query demos work.
- Zero changes to the demo components or hooks.

**Non-Goals:**
- No routing library, URL-based selection, or persisted selection across reloads.
- No changes to how each demo fetches data internally.
- No changes to other sub-projects in the repo.

## Decisions

**D1: Demo selector lives in `App.jsx`, driven by `useState`.**
`App` keeps its header and renders a button row plus the active demo. Selected demo id is a `useState` string, defaulting to the first demo (`meme-fetcher`). A second `useState` (`showDemo`, default `true`) backs a "Mostrar/Ocultar demo" toggle: when false, a hint paragraph replaces the demo, making the mount/unmount lifecycle and effect cleanup visible. A `DEMOS` array maps id → label → component; rendering `const Active = DEMOS[i].component` guarantees only the selected component is mounted (React unmounts the previous one when the component type changes), which also re-triggers the `AbortController`/cleanup behavior the course wants to show.
- *Alternative considered:* rendering all four and toggling `display` via CSS. Rejected — it breaks the unmount/abort teaching point and fetches 4 times on load.

**D2: `QueryClientProvider` moves unconditionally to `main.jsx`.**
`main.jsx` imports `QueryClient`/`QueryClientProvider`, creates a single `queryClient` at module scope, and always wraps `<App />`. All commented-out imports/JSX are removed. This is required for both `MemeFetcherV3` (via `useMemes`/`useQuery`) and `Productos`, and harmless for the other two demos.
- *Alternative considered:* mounting a per-demo provider only for React Query demos. Rejected — redundant and more complex than a single root provider.

**D3: Buttons use the existing styling approach in `App.css`.**
Selector buttons are plain `<button>` elements with small `.demo-tab` classes added to `App.css` (active state highlighted), matching the current minimal, un-framed style of the project. The toggle reuses `.demo-tab` with a `.demo-toggle` modifier.

**D4: `useFetch` guards state updates with a `cancelled` flag.**
The original hook ran `setLoading(false)` in `finally` even when the request was aborted. Under StrictMode (mount → cleanup → remount) the first aborted request flushed `{ loading: false, error: null, data: null }`, and `MemeFetcherV2`'s `memes.data.memes` dereferenced `null` → uncaught render error → React unmounted the root → blank page. The hook now flips `cancelled = true` in cleanup and every state write checks it, so an aborted request never corrupts state. This is the canonical "don't set state after unmount" pattern and reinforces the course's abort lesson.
- *Alternative considered:* only patching `MemeFetcherV2` with a `if (!memes) return null` guard. Rejected — it hides the real bug and leaves the hook teaching wrong behavior.

## Risks / Trade-offs

- [Button row is basic UI] → Intentional: this is a teaching repo, not a polished app; a `<nav>` with classes is enough.
- [Switching demos discards in-memory state of the previous demo (e.g. a partially typed mutation)] → Expected and desirable: each demo is independent and remounts fresh.
- [Module-scope `QueryClient` is a long-lived instance] → Standard React Query pattern; cache invalidation per mutation is already handled inside `Productos`.
