/**
 * ============================================================
 * main.jsx — THE JAVASCRIPT ENTRY POINT OF THE REACT APP
 * ============================================================
 *
 * This is the FIRST JavaScript file that runs when the app starts.
 * It connects React to the HTML page by:
 *   1. Finding the <div id="root"> in index.html
 *   2. Creating a React "root" on that div
 *   3. Rendering the <App /> component inside it
 *
 * FLOW: index.html → main.jsx → App.jsx → All other components
 *
 * Think of this file as the "ignition key" that starts the React engine.
 */

// ─── IMPORTS ────────────────────────────────────────────────

/**
 * StrictMode — A special React wrapper component (does NOT render any visible UI).
 * It helps you find potential problems in your code during development by:
 *   - Running components TWICE to detect side effects
 *   - Warning about deprecated/unsafe lifecycle methods
 *   - Highlighting other potential issues
 *
 * NOTE: StrictMode only runs in development mode. It has NO effect
 * in the production build, so it won't slow down your deployed app.
 */
import { StrictMode } from 'react'

/**
 * createRoot — A function from 'react-dom/client' that creates the
 * connection between React and the actual HTML DOM (Document Object Model).
 *
 * 'react' handles the LOGIC (what to render).
 * 'react-dom' handles the RENDERING (putting it on the actual web page).
 *
 * They are separate packages because React can also render to other targets
 * like mobile apps (React Native) or VR (React 360).
 */
import { createRoot } from 'react-dom/client'

/**
 * index.css — Global styles that apply to the ENTIRE application.
 * This includes CSS variables (custom properties), base typography,
 * dark mode support, and layout styles for the root container.
 * Importing a CSS file in React makes its styles available globally.
 */
import './index.css'

/**
 * App — The ROOT COMPONENT of our React application.
 * Every React app has one root component that contains all other components.
 * App.jsx is where we assemble all our feature components together.
 */
import App from './App.jsx'

// ─── RENDERING THE APP ─────────────────────────────────────

/**
 * This single line does THREE things:
 *
 * 1. document.getElementById('root')
 *    → Finds the <div id="root"> element in index.html
 *
 * 2. createRoot(...)
 *    → Creates a React root on that DOM element — this is where
 *      React will manage all the UI updates
 *
 * 3. .render(...)
 *    → Renders the <App /> component (wrapped in StrictMode) into the root.
 *      From this point on, React takes over and manages the entire UI.
 *
 * The entire app's component tree starts from <App /> and branches out
 * into child components (Event, Hook, Form, etc.).
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
