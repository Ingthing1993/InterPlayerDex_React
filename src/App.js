/**
 * ROOT COMPONENT — the top of the React tree
 *
 * App.js is the single component that index.js renders. Its job is to compose
 * the rest of the app: layout, routes, and which "page" or section is shown.
 * Keep App thin: put real UI and logic in components/ (or pages/, etc.).
 */

import Home from './components/Home';

/**
 * Right now we only show the Home component. As the app grows you might:
 * - Add a header/footer here
 * - Use a router and render different components per URL
 * - Wrap children in providers (theme, auth, data)
 */
function App() {
  return <Home />;
}

/** default export so other files can do: import App from './App' */
export default App;
