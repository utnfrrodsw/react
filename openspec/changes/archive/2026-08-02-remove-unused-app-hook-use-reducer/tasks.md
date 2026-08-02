## 1. Remove dead files

- [x] 1.1 Delete `hook-use-reducer/src/App.jsx`
- [x] 1.2 Delete `hook-use-reducer/src/App.css`
- [x] 1.3 Delete `hook-use-reducer/src/assets/react.svg` and remove the now-empty `src/assets/` directory

## 2. Clean up entry point

- [x] 2.1 Remove the commented-out `// import App from './App.jsx'` line from `hook-use-reducer/src/main.jsx`
- [x] 2.2 Remove the commented-out `{/* <App /> */}` line from `hook-use-reducer/src/main.jsx`

## 3. Verify

- [x] 3.1 Run `npm run build` in `hook-use-reducer/` and confirm it succeeds
- [x] 3.2 Grep the project for `App.jsx` / `App.css` / `react.svg` references and confirm no active imports remain (only `index.html` may reference `/vite.svg`, which is kept)
