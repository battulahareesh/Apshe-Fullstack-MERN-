/**
 * ============================================================
 * Event.jsx — DEMONSTRATES EVENT HANDLING IN REACT (onClick)
 * ============================================================
 *
 * CONCEPT: EVENT HANDLING
 * Events are actions that happen in the browser — like clicking a button,
 * typing in an input, hovering over an element, submitting a form, etc.
 *
 * In React, we handle events using special attributes on JSX elements:
 *   - onClick    → when the user clicks an element
 *   - onChange   → when the value of an input changes
 *   - onSubmit   → when a form is submitted
 *   - onMouseEnter, onKeyDown, etc.
 *
 * KEY DIFFERENCES FROM HTML:
 *   HTML:   <button onclick="handleClick()">Click</button>
 *   React:  <button onClick={handleClick}>Click</button>
 *
 *   1. Event names are camelCase: onClick (not onclick)
 *   2. Pass the FUNCTION REFERENCE, not a string: {handleClick} (not "handleClick()")
 *      → We pass handleClick (without parentheses) because we want React to
 *        CALL the function when the event happens, not immediately when the page loads.
 */

/**
 * Event — A function component that demonstrates onClick event handling.
 *
 * This is an ARROW FUNCTION component (uses => syntax).
 * It works exactly the same as a regular function component:
 *   const Event = () => { ... }   is the same as   function Event() { ... }
 */
const Event = () => {

  /**
   * handleClick — The event handler function.
   *
   * This function is called ONLY when the button is clicked.
   * It shows a browser alert dialog with the message "Button clicked".
   *
   * NAMING CONVENTION: Event handler functions are typically named
   * with the prefix "handle" followed by the event name:
   *   handleClick, handleChange, handleSubmit, etc.
   */
  function handleClick() {
    alert("Button clicked")
  }

  return (
    <div>
      {/*
        onClick={handleClick}
        
        This tells React: "When this button is clicked, run the handleClick function."
        
        ⚠️ COMMON MISTAKE:
          ✅ CORRECT:   onClick={handleClick}       → passes the function (called later)
          ❌ WRONG:     onClick={handleClick()}     → calls it IMMEDIATELY on render!
          
        The difference is the parentheses (). Without them, we pass a reference
        to the function. With them, we CALL the function right away.
      */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

/**
 * export default Event
 *
 * Default export — allows this component to be imported as:
 *   import Event from './Event'
 */
export default Event
