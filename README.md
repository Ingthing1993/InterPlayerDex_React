# Interplaydex Web (InterPlayerDex React)

A React front end — my first project. I use this repo as **study notes** (how React and the app flow work) and as a **showcase** of what I'm building.

**Public repository** — feel free to clone, fork, or use as reference. Don’t commit secrets or API keys; use environment variables (e.g. `.env`) and keep them in `.gitignore`.

---

## What this is

A minimal React single-page app (Create React App) that fetches player data from an API and displays it. The codebase is commented so I can revisit the “why” and the flow. Components live under `src/Components/` (Header, Body, PlayerCard).

---

## Tech stack

| Tool | Purpose |
|------|--------|
| **React 19** | UI components and rendering |
| **Create React App** | Build, dev server, proxy, and default tooling |
| **React Testing Library** | Component tests (when I add them) |

---

## Quick start

```bash
# Install dependencies
npm install

# Run the app (dev server at http://localhost:3000)
npm start

# Production build (output in build/)
npm run build

# Run tests
npm test
```

**Note:** The app expects an API at `http://localhost:3001/api/players`. Start your backend on that port, or adjust the fetch URL in `Body.js`.

---

## App flow

How data and rendering move through the app:

1. **Entry** — `public/index.html` loads; the build injects the JS bundle. The bundle runs `src/index.js`.
2. **Mount** — `index.js` finds the DOM node `#root`, creates a React root, and calls `root.render(<App />)`. From here, everything is React.
3. **Root** — `App.js` is the root component. It renders the layout: `<Header />` and `<Body />`. No data fetching here; App stays thin.
4. **Header** — Presentational only. Renders logo and title; no state or effects.
5. **Body** — Holds the player list. On mount, `useEffect` runs and calls `getPlayers()`, which fetches from the API. The response is stored in state with `setPlayers(data)`. Body then maps over `players` and renders one `<PlayerCard />` per player, passing `image`, `name`, `position`, `birthdate` as props.
6. **PlayerCard** — Presentational. Receives props and renders a card; no hooks, no fetch. Reused for each player.

So: **index → App → Header + Body → Body (state + effect, fetch) → many PlayerCards (props)**.

---

## Hooks used (and where)

| Hook | Where it’s used | What it does |
|------|------------------|--------------|
| **`useState`** | `Body.js` | Holds the list of players (`players`) returned from the API. When `setPlayers(data)` runs after fetch, React re-renders Body and the new list is mapped to PlayerCards. |
| **`useEffect`** | `Body.js` | Runs once after the first render (empty dependency array `[]`). Calls `getPlayers()` so we fetch when the component mounts, not on every render. |

No custom hooks yet. Header and PlayerCard are presentational (props in, JSX out).

### Best resources for hooks

- **React docs (official)** — [React Reference: Hooks](https://react.dev/reference/react)  
  - [useState](https://react.dev/reference/react/useState) — adding state to a component, when re-renders happen.  
  - [useEffect](https://react.dev/reference/react/useEffect) — side effects (fetch, subscriptions), dependency array, cleanup.  
  - [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks) — only call hooks at the top level and from React functions.
- **Learn React (tutorial)** — [Managing state](https://react.dev/learn/managing-state), [Escape hatches (useEffect)](https://react.dev/learn/escape-hatches) — good for “why” and patterns.

---

## Planning and building components

How I approach adding or changing components:

1. **Decide responsibility** — One main job per component (e.g. “show header”, “fetch and list players”, “show one player card”). If a file is doing two big things, split it.
2. **Data flow** — Where does the data live? Usually one parent owns the state (or fetches), and passes data down via **props**. Children stay presentational when possible (e.g. PlayerCard only receives `name`, `position`, etc.).
3. **State** — Use `useState` for values that change over time and that the UI must reflect. Put state in the lowest component that needs to read it and the children that need to change it (or lift it up if a sibling needs it).
4. **Side effects** — Use `useEffect` for fetch, subscriptions, or touching the DOM. Run once on mount with `[]`; run when a value changes by listing it in the dependency array. Don’t fetch in the render; fetch inside `useEffect`.
5. **Composition** — Prefer small components composed in a parent (e.g. Body maps `players` to `<PlayerCard ... />`) over one huge component. Reuse by props and composition, not by copying JSX.

### Best resources for planning and building

- **[Thinking in React](https://react.dev/learn/thinking-in-react)** (React docs) — Step-by-step: break UI into a component hierarchy, build a static version, identify state, add data flow. Use this when starting a new feature or page.
- **[Passing props](https://react.dev/learn/passing-props-to-a-component)** — How to pass data and handlers into children.
- **[Component composition](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)** — Using `children` and composition instead of prop drilling when it makes sense.

---

## Project structure

```
interplaydex-web/
├── public/
│   └── index.html              # HTML shell; React mounts into <div id="root">
├── src/
│   ├── index.js                # Entry: createRoot(#root), render(<App />)
│   ├── index.css               # Global styles
│   ├── App.js                  # Root: <Header /> + <Body />
│   ├── assets/
│   │   └── images/             # Static assets (e.g. logo)
│   └── Components/
│       ├── Header/             # Logo and title (presentational)
│       ├── Body/               # Fetches players, holds state, maps to PlayerCard
│       └── PlayerCard/         # Single player card (presentational, props)
├── package.json                # "proxy": "http://localhost:3001" for dev API
└── README.md
```

---

## Study notes (where to read in the code)

| Concept | Where it’s explained |
|--------|-----------------------|
| **Entry point & mounting** | `src/index.js` — how the app attaches to the DOM |
| **Root component** | `src/App.js` — thin root, composes Header + Body |
| **State and fetch** | `src/Components/Body/Body.js` — useState for players, useEffect to call getPlayers on mount |
| **Presentational component** | `src/Components/PlayerCard/PlayerCard.js` — props in, JSX out |
| **Mount point** | `public/index.html` — `#root` and script injection |

---

## Goals / roadmap

- [x] Barebones React app with a clear structure
- [x] Heavily commented code for study and reuse
- [x] Fetch players from API, display in Body via PlayerCard
- [ ] *(Add features and goals here as the project grows)*

---

## License

MIT (or your choice). This is a learning and showcase project.
