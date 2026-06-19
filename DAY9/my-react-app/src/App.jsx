/**
 * ============================================================
 * App.jsx — THE ROOT (PARENT) COMPONENT OF THE APPLICATION
 * ============================================================
 *
 * WHAT IS A COMPONENT?
 * A component is a reusable piece of UI (User Interface). Think of it like
 * a LEGO block — you build small blocks (components) and snap them together
 * to create the full application.
 *
 * App.jsx is the TOP-LEVEL component that holds ALL other components.
 * It acts as the "container" or "parent" for the entire application.
 *
 * COMPONENT TREE (how components are nested):
 *
 *   <App>                    ← This file (the root)
 *     ├── <Style />          ← Demonstrates inline CSS styling
 *     ├── <Event />          ← Demonstrates onClick event handling
 *     ├── <Change />         ← Demonstrates onChange event handling
 *     ├── <Hook />           ← Demonstrates useState Hook
 *     ├── <Form />           ← Demonstrates form handling with state
 *     └── <Lifecycle />      ← Demonstrates useEffect Hook (API fetching)
 *
 * HOW TO USE A COMPONENT:
 *   1. Import it:  import ComponentName from './ComponentName'
 *   2. Use it as an HTML-like tag:  <ComponentName />
 */

// ─── IMPORTS ────────────────────────────────────────────────

/**
 * Importing the CSS file for App-specific styles.
 * These styles apply to elements used within this component and its children.
 * In React, you import CSS files directly into JS/JSX files.
 */
import './App.css'

/**
 * Importing all the child components that App will render.
 *
 * NOTE on import syntax:
 *   - "import Style from './Style'"      → DEFAULT import
 *     Used when the component is exported with "export default"
 *
 *   - "import { Hook } from './Hook'"    → NAMED import (with curly braces)
 *     Used when the component is exported with "export const Hook"
 *
 * Both work the same way, but the syntax must match how the component
 * was exported in its file.
 */
import Style from './Style'         // Inline styling example (default export)
import Event from './Event'         // Click event example (default export)
import Change from './Change'       // Input change event example (default export)
import { Hook } from './Hook'       // useState Hook example (named export)
import { Form } from './Form'       // Form handling example (named export)
import Lifecycle from './Lifecycle'  // useEffect / API fetch example (default export)

// ─── APP COMPONENT ──────────────────────────────────────────

/**
 * App() — The main function component.
 *
 * WHAT IS A FUNCTION COMPONENT?
 * A function component is simply a JavaScript function that returns JSX.
 * JSX looks like HTML but it's actually JavaScript — React converts it
 * into real HTML elements behind the scenes.
 *
 * RULES OF JSX:
 *   1. Must return a SINGLE parent element (here we use <div>)
 *   2. Use className instead of class (because 'class' is a reserved JS word)
 *   3. All tags must be closed (e.g., <br /> not <br>)
 *   4. JavaScript expressions go inside curly braces { }
 */
function App() {

  return (
    /**
     * All components are rendered inside this parent <div>.
     * Each component below demonstrates a different React concept.
     * They are rendered in order from top to bottom on the page.
     *
     * IMPORTANT: Each <Component /> tag calls that component's function
     * and inserts its returned JSX here. It's like calling a function
     * that returns a piece of the UI.
     */
    <div>
      {/* ── Section 1: Inline Styling ── */}
      {/* Demonstrates how to apply CSS styles directly in JSX using JavaScript objects */}
      <h2>1. Inline Styling Example</h2>
      <Style />

      <hr /> {/* Horizontal line to separate sections visually */}

      {/* ── Section 2: Event Handling (onClick) ── */}
      {/* Demonstrates how to handle button click events in React */}
      <h2>2. Click Event Example</h2>
      <Event />

      <hr />

      {/* ── Section 3: Event Handling (onChange) ── */}
      {/* Demonstrates how to capture user input as they type */}
      <h2>3. Input Change Event Example</h2>
      <Change />

      <hr />

      {/* ── Section 4: useState Hook ── */}
      {/* Demonstrates how React tracks and updates data using state */}
      <h2>4. useState Hook Example</h2>
      <Hook />

      <hr />

      {/* ── Section 5: Form Handling ── */}
      {/* Demonstrates controlled forms with state and form submission */}
      <h2>5. Form Handling Example</h2>
      <Form />

      <hr />

      {/* ── Section 6: useEffect & API Fetching ── */}
      {/* Demonstrates fetching data from an API when the component loads */}
      <h2>6. useEffect Lifecycle Example</h2>
      <Lifecycle />
    </div>
  )
}

/**
 * export default App
 *
 * This makes the App component available for other files to import.
 * "default" means this is the MAIN export of this file — when another
 * file does "import App from './App'", it gets this component.
 *
 * A file can only have ONE default export, but can have many named exports.
 */
export default App
