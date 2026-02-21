/**
 * ENTRY POINT — where the React app starts
 *
 * This is the only file that talks to the real DOM. Everything else is React
 * components. Flow: browser loads index.html → loads this bundle → we find
 * the "#root" div and "mount" our React tree into it.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Get the DOM node that will hold the entire React app.
 * index.html has <div id="root"></div> — we render into that.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Render the app. We pass a single component (<App />); React will render it
 * and everything it returns (and their children) into #root.
 *
 * StrictMode (development only) runs extra checks (e.g. unsafe lifecycles,
 * legacy APIs) to help you write future-proof code. It does not run in prod.
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
