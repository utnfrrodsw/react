## 1. App as demo selector

- [x] 1.1 Rewrite `src/App.jsx` in `hook-use-effect`: keep the current header, define a `DEMOS` array mapping id → label → component in order `meme-fetcher`, `meme-fetcher-v2`, `meme-fetcher-v3`, `productos`, and add `useState` for the selected id (default `meme-fetcher`)
- [x] 1.2 Render a row of selector buttons from `DEMOS`; the active button gets a selected state class
- [x] 1.3 Render only the currently selected demo component by looking it up from the selected id

## 2. Root QueryClientProvider

- [x] 2.1 Edit `src/main.jsx`: import `QueryClient` and `QueryClientProvider` from `@tanstack/react-query`, create one `queryClient` at module scope, and always wrap `<App />` (remove all commented-out imports/JSX)

## 3. Styles

- [x] 3.1 Add `.demo-tab` / active-selector styles to `src/App.css` for the selector buttons

## 4. Verification

- [x] 4.1 Run `npm run lint` in `hook-use-effect` and fix any issues
- [x] 4.2 Run `npm run build` in `hook-use-effect` and confirm it succeeds
- [ ] 4.3 Manually verify each of the four demos renders by clicking through the selector in `npm run dev`

## 5. Mount/unmount toggle

- [x] 5.1 Add a `showDemo` `useState` (default `true`) to `App.jsx` and a toggle button that flips it
- [x] 5.2 Render the selected demo only when `showDemo` is true; otherwise render a hint message that the component is unmounted
- [x] 5.3 Add `.demo-controls` / `.demo-toggle` / `.demo-unmounted` styles to `App.css`

## 6. Fix MemeFetcherV2 blank screen

- [x] 6.1 Add a `cancelled` flag in `src/hooks/useFetch.jsx`, set it in the effect cleanup, and guard every `setData` / `setError` / `setLoading` call with it so an aborted fetch cannot flush `{ loading: false, data: null }`

## 7. Re-verification

- [x] 7.1 Run `npm run lint` in `hook-use-effect` and fix any issues
- [x] 7.2 Run `npm run build` in `hook-use-effect` and confirm it succeeds
- [ ] 7.3 In `npm run dev`, confirm MemeFetcherV2 loads without a blank screen and the toggle mounts/unmounts the selected demo
