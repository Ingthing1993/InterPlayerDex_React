# Interplaydex Web

A React front end — my first project. I use this repo as **study notes** (how React and the app flow work) and as a **showcase** of what I'm building.

---

## What this is

A minimal React single-page app (Create React App), stripped to the essentials. The codebase is heavily commented so I can revisit the “why” and the flow whenever I need to. As I add features, they’ll live under `src/components/` and follow the same structure.

---

## Tech stack

| Tool | Purpose |
|------|--------|
| **React 19** | UI components and rendering |
| **Create React App** | Build, dev server, and default tooling |
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

---

## Project structure

```
interplaydex-web/
├── public/
│   └── index.html          # HTML shell; React mounts into <div id="root">
├── src/
│   ├── index.js            # Entry point: mounts the React app into #root
│   ├── index.css           # Global styles
│   ├── App.js              # Root component; composes the rest of the app
│   └── components/         # All UI and page components live here
│       └── Home.js         # Home / landing content
├── package.json
└── README.md
```

**Flow (study note):**  
`index.html` loads → the bundled script runs `index.js` → `index.js` finds `#root`, creates a React root, and calls `root.render(<App />)` → `App` renders `<Home />` (and later other components) → that tree is what the user sees. The HTML file stays minimal; all dynamic content comes from React.

---

## Study notes (where to read in the code)

I keep these as comments in the repo so I can grep or open files and remember the flow:

| Concept | Where it’s explained |
|--------|-----------------------|
| **Entry point & mounting** | `src/index.js` — why this file runs first and how React attaches to the DOM |
| **Root component** | `src/App.js` — why App is thin and only composes children |
| **Page / presentational components** | `src/components/Home.js` — why components live in `components/`, JSX and `className` |
| **Global vs component CSS** | `src/index.css` — global styles; component-specific styles can live next to components |
| **Mount point** | `public/index.html` — what `#root` is and how the build injects the script |

As I learn more (state, hooks, routing, API calls), I’ll add short notes here or in the relevant files.

---

## Goals / roadmap

- [x] Barebones React app with a clear structure
- [x] Heavily commented code for study and reuse
- [ ] *(Add features and goals here as the project grows)*

---

## License

MIT (or your choice). This is a learning and showcase project.
