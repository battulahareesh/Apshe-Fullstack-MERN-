/**
 * ============================================================
 * Form.jsx — DEMONSTRATES FORM HANDLING IN REACT
 * ============================================================
 *
 * CONCEPT: CONTROLLED COMPONENTS
 * In React, a "controlled component" is a form element (input, textarea,
 * select) whose value is controlled by React state — not by the browser.
 *
 * HOW IT WORKS:
 *   1. The input's 'value' is tied to a state variable: value={name}
 *   2. When the user types, onChange updates the state: setName(e.target.value)
 *   3. React re-renders with the new state, updating the input's display
 *
 * This gives React FULL CONTROL over the form data, making it easy to:
 *   - Validate inputs before submission
 *   - Transform input values (e.g., uppercase)
 *   - Reset the form after submission
 *   - Share form data with other components
 *
 * UNCONTROLLED vs CONTROLLED:
 *   Uncontrolled: Browser manages the input value (like regular HTML)
 *   Controlled:   React manages the input value through state (React way)
 */

// ─── IMPORTS ────────────────────────────────────────────────

/**
 * Import useState to manage the form's input value as state.
 */
import { useState } from "react";

// ─── FORM COMPONENT ─────────────────────────────────────────

/**
 * Form — A controlled form component with text input and submit button.
 *
 * NAMED EXPORT: "export const Form" — must be imported with { }:
 *   import { Form } from './Form'
 */
export const Form = () => {

  /**
   * STATE: 'name' holds the current text typed in the input field.
   *
   * useState("") — Initial value is an empty string "" (blank input).
   *
   * name    → The current value of the input field
   * setName → Function to update 'name' (and trigger re-render)
   */
  const [name, setName] = useState("");

  /**
   * handleSubmit — Runs when the form is submitted (user clicks Submit
   * button or presses Enter while the input is focused).
   *
   * @param {Object} e — The form submission event object
   *
   * STEP-BY-STEP:
   *   1. e.preventDefault()  → Prevents the default browser behavior of
   *      RELOADING THE PAGE when a form is submitted. This is CRITICAL
   *      in React because a page reload would destroy all our state
   *      and restart the entire application.
   *
   *   2. console.log("Welcome", name) → Logs the submitted name to the
   *      browser's developer console (open with F12 → Console tab).
   *
   *   3. setName("") → Clears the input field by resetting state to "".
   *      Since the input's value is tied to 'name' state, setting it
   *      to "" also clears what the user sees in the input field.
   */
  function handleSubmit(e) {
    e.preventDefault(); // ⚠️ CRITICAL: Stops the page from reloading!
    console.log("Welcome", name)
    setName(""); // Clear the input field after submission
  }

  return (
    <div>
      {/*
        onSubmit={handleSubmit}
        
        The onSubmit event fires when the form is submitted. This happens when:
          - The user clicks the Submit button
          - The user presses Enter while focused on an input inside the form
          
        We attach our handleSubmit function to handle both cases.
      */}
      <form onSubmit={handleSubmit}>
        {/*
          CONTROLLED INPUT — Three key attributes:

          1. value={name}
             → The input always displays whatever is in the 'name' state.
             This makes React the "single source of truth" for this input.

          2. onChange={(e) => setName(e.target.value)}
             → Every time the user types a character, this:
               a) Gets the new input value from e.target.value
               b) Updates the 'name' state with setName()
               c) React re-renders, and the input shows the updated value

          3. type="text"
             → Specifies this is a text input (not password, email, etc.)

          FLOW: User types "A" → onChange fires → setName("A") → 
                React re-renders → input shows "A"
        */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />

        {/*
          Submit button — When clicked, the form's onSubmit event fires.
          The button type defaults to "submit" inside a <form>, so clicking
          it triggers form submission (which calls handleSubmit).
        */}
        <button>Submit</button>
      </form>
    </div>
  );
};
