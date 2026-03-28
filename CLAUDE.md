# Modry Młyn - Domek (Cottage Rental Website)

## Commands
- `npm start` — dev server
- `npm test` — run tests (Jest + React Testing Library)
- `npm run build` — production build
- `npm install --legacy-peer-deps` — required flag due to react-scripts 5 / TypeScript 6 / i18next peer dep conflicts

## Stack
- React 19, TypeScript 6, Create React App (react-scripts 5.0.1)
- react-router-dom v7, React Bootstrap, i18next + react-i18next
- Jest + @testing-library/react for tests

## Project structure
- `src/i18n/` — i18next config and translation JSON files (pl.json, en.json)
- `src/components/` — shared components (AppNavbar, LanguageSwitch, ImageGallery)
- `src/pages/` — page components (MainPage, GrantPage)
- `src/assets/` — images copied from sibling project `/Users/marek.topolewski/fun_space/modrymlyn/src/assets/`

## Key conventions
- Polish is the default language (`lng: 'pl'`)
- Translations are bundled inline (no HTTP backend) — add keys to both `pl.json` and `en.json`
- Use React Bootstrap components and utility classes for layout; minimize custom CSS
- Tests import i18n globally via `setupTests.ts`
- All text content containers must use the `content-panel` CSS class (semi-transparent background over the repeating pattern) — defined in `App.css`

## Known workarounds
- `package.json` has a Jest `moduleNameMapper` to resolve react-router-dom v7 — CRA's Jest doesn't support the `exports` field in package.json
- `setupTests.ts` polyfills `TextEncoder`/`TextDecoder` for react-router v7 compatibility with jsdom
- `src/react-app-env.d.ts` has explicit `declare module` for CSS/image imports (TypeScript 6 strict mode)
