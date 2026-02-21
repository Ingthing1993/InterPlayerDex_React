/**
 * HOME — a presentational / page component
 *
 * Lives in components/ so the app stays organised: one component per file,
 * named by what it represents. This one is the main "home" content. Other
 * components might be Header, PlayerCard, SearchBar, etc.
 *
 * Flow: index.js renders <App /> → App renders <Home /> → this JSX is what
 * the user sees. Data and events would be passed down as props or handled
 * here (or in a parent) as you add features.
 */

function Home() {
  /**
   * Return one React element (here a div). className is used instead of
   * "class" because "class" is reserved in JavaScript. The h1 is a child
   * of the div; React will render this tree into the DOM.
   */
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

/** default export so App.js can do: import Home from './components/Home' */
export default Home;
