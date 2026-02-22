# Interplaydex Web

A React front end for displaying player data, built as my first React project and shared publicly as a portfolio piece.

**[Live demo](#)** · **React 19** · **Create React App**

---

## Overview

Interplaydex Web is a single-page application that fetches player data from a REST API and renders it in a clean, component-based UI. The app demonstrates modern React patterns: functional components, hooks for state and side effects, and a clear separation between data-fetching and presentational components.

---

## What this project demonstrates

- **React fundamentals** — Component composition, JSX, props, and the one-way data flow from root to leaves
- **Hooks** — `useState` for the players list and `useEffect` for fetching on mount (with dependency array)
- **API integration** — `fetch` to a backend API, handling async data and updating the UI when the response arrives
- **Structure** — A thin root (`App`) that composes layout; a container component (`Body`) that owns state and fetch logic; presentational components (`Header`, `PlayerCard`) that receive data via props
- **Dev workflow** — Create React App, dev proxy for the API, and a consistent folder structure under `src/Components/`

---

## Tech stack

| Technology | Use |
|------------|-----|
| **React 19** | UI components and rendering |
| **Create React App** | Build tooling, dev server, and proxy |
| **React Testing Library** | For tests (when added) |

---

## Quick start

```bash
git clone https://github.com/Ingthing1993/InterPlayerDex_React.git
cd InterPlayerDex_React
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The app expects a backend API at `http://localhost:3001/api/players` returning a JSON array of players (e.g. `{ _id, name, position, birthdate, image }`). Configure the proxy in `package.json` if your API runs on a different port.

```bash
npm run build   # Production build
npm test        # Run tests
```

---

## How it works

1. **Entry** — The app mounts at `#root` in `index.html`; `index.js` creates a React root and renders `<App />`.
2. **Layout** — `App` renders `<Header />` and `<Body />`. No data or fetch logic in the root.
3. **Data** — `Body` uses `useState` for the players list and `useEffect` (with `[]`) to call `getPlayers()` once on mount. The API response is stored with `setPlayers(data)`.
4. **Display** — `Body` maps over `players` and renders a `<PlayerCard />` for each, passing `image`, `name`, `position`, and `birthdate` as props. `PlayerCard` is purely presentational.

**Flow:** `index.js` → `App` → `Header` + `Body` → `Body` (state + `useEffect` fetch) → list of `PlayerCard` (props).

---

## Project structure

```
src/
├── index.js                 # Entry: createRoot, render(<App />)
├── index.css                # Global styles
├── App.js                   # Root: <Header /> + <Body />
├── assets/images/           # Static assets (e.g. logo)
└── Components/
    ├── Header/              # Logo and title (presentational)
    ├── Body/                # Fetches players, holds state, maps to PlayerCard
    └── PlayerCard/          # Single player card (props only)
```

---

## Implementation notes

| Area | Details |
|------|---------|
| **State** | `useState([])` in `Body.js` holds the players array; `setPlayers(data)` after fetch triggers a re-render and the list appears. |
| **Side effects** | `useEffect(() => { getPlayers(); }, [])` in `Body.js` runs the fetch once on mount. Empty dependency array = run once. |
| **Props** | `PlayerCard` receives `image`, `name`, `position`, `birthdate`; no internal state or fetch. |

The codebase includes inline comments on entry point, mounting, and data flow for quick reference.

---

## Roadmap

- [x] React app with Header, Body, and PlayerCard components
- [x] Fetch players from API and display with `useState` / `useEffect`
- [x] Documented structure and flow
- [ ] **Admin area** — Add an admin section with a React form to create/add new players (submit to API, then refresh or redirect to the player list)
- [ ] Additional features as the project evolves

---

## License

MIT. This is a public portfolio project — clone, fork, or use as reference. For local development, use environment variables for any secrets and keep them out of the repo (e.g. `.env` in `.gitignore`).
