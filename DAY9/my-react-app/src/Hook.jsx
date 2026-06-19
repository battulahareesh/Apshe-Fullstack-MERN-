/**
 * ============================================================
 * Hook.jsx — DEMONSTRATES THE useState HOOK IN REACT
 * ============================================================
 *
 * CONCEPT: WHAT IS STATE?
 * "State" is data that a component REMEMBERS and can CHANGE over time.
 * When state changes, React automatically RE-RENDERS the component
 * (updates the UI to reflect the new data).
 *
 * Example: A counter that goes from 0 → 1 → 2. The count value is "state".
 *
 * WITHOUT state: The UI is static — it never changes after the first render.
 * WITH state:    The UI is dynamic — it updates whenever the data changes.
 *
 * CONCEPT: WHAT IS A HOOK?
 * Hooks are special functions provided by React that let you "hook into"
 * React features (like state, lifecycle, context, etc.) from function components.
 *
 * Rules of Hooks:
 *   1. Only call Hooks at the TOP LEVEL of your component (not inside loops,
 *      conditions, or nested functions)
 *   2. Only call Hooks from React function components or custom Hooks
 *
 * useState is the most basic and commonly used Hook.
 *
 * CONCEPT: HOW useState WORKS
 *   const [value, setValue] = useState(initialValue)
 *
 *   - value        → The current state value (read it to display data)
 *   - setValue     → A function to UPDATE the state (call it to change data)
 *   - initialValue → The starting value when the component first renders
 *
 * The [value, setValue] syntax is called "array destructuring" — it unpacks
 * the array returned by useState into two separate variables.
 */

// ─── IMPORTS ────────────────────────────────────────────────

/**
 * Import useState from React.
 * We use { useState } (with curly braces) because it's a NAMED export
 * from the 'react' package, not a default export.
 */
import { useState } from "react";

// ─── HOOK COMPONENT ─────────────────────────────────────────

/**
 * Hook — A function component that demonstrates useState.
 *
 * This component lets the user toggle between "veg" and "Non-Veg" modes
 * by clicking buttons. The current mode is stored in state and displayed.
 *
 * "export const" = NAMED export. Must be imported with curly braces:
 *   import { Hook } from './Hook'   ← Note the { }
 */
export const Hook = () => {

  /**
   * useState("veg") — Creates a piece of state:
   *
   *   mode    → Current value of the state. Starts as "veg".
   *   setMode → Function to update 'mode'. When called, React re-renders
   *             the component with the new value.
   *
   * FLOW when user clicks "Non Veg" button:
   *   1. setMode("Non-Veg") is called
   *   2. React updates 'mode' from "veg" to "Non-Veg"
   *   3. React RE-RENDERS the component (calls Hook() again)
   *   4. The <h2> now shows "Mode: Non-Veg" instead of "Mode: veg"
   *
   * ⚠️ IMPORTANT: You must NEVER modify state directly!
   *   ❌ WRONG:   mode = "Non-Veg"     → React won't know it changed, no re-render
   *   ✅ CORRECT: setMode("Non-Veg")   → React detects the change and re-renders
   */
  const [mode, setMode] = useState("veg");

  return (
    <div>
      {/* 
        Display the current value of 'mode' state.
        The curly braces { } tell JSX: "treat this as JavaScript, not text".
        So {mode} outputs the VALUE of the 'mode' variable.
      */}
      <h2>Mode: {mode}</h2>

      {/*
        Button 1: Set mode to "veg"
        
        onClick={() => setMode("veg")}
        
        We use an ARROW FUNCTION here (() => ...) because we need to
        PASS AN ARGUMENT to setMode. If we wrote onClick={setMode("veg")},
        it would call setMode immediately during render (bug!).
        
        The arrow function creates a wrapper: "when clicked, THEN call setMode("veg")"
      */}
      <button onClick={() => setMode("veg")}>Veg</button>

      {/*
        Button 2: Set mode to "Non-Veg"
        Same pattern — arrow function wraps setMode to prevent immediate execution.
      */}
      <button onClick={() => setMode("Non-Veg")}>Non Veg</button>
    </div>
  );
};
