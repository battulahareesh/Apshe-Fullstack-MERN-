/**
 * ============================================================
 * Change.jsx — DEMONSTRATES onChange EVENT HANDLING IN REACT
 * ============================================================
 *
 * CONCEPT: onChange EVENT
 * The onChange event fires EVERY TIME the user types, deletes, or pastes
 * text into an input field. It gives us real-time access to what the user
 * is typing.
 *
 * HOW IT WORKS:
 *   1. User types a character in the input field
 *   2. React fires the onChange event
 *   3. Our handleChange function receives an "event" object
 *   4. We read the current input value from event.target.value
 *
 * WHAT IS THE "event" OBJECT?
 * When any event happens in the browser (click, type, scroll, etc.),
 * the browser creates an "event" object that contains information about
 * what happened. React wraps this in a "SyntheticEvent" for cross-browser
 * compatibility. Key properties include:
 *   - event.target       → The HTML element that triggered the event (the <input>)
 *   - event.target.value → The current text inside the input field
 *   - event.type         → The type of event ("change", "click", etc.)
 */

/**
 * Change — A function component that demonstrates the onChange event.
 *
 * Arrow function syntax: const Change = () => { ... }
 * This is equivalent to: function Change() { ... }
 */
const Change = () => {

  /**
   * handleChange — Event handler that runs every time the input value changes.
   *
   * @param {Object} event — The event object automatically passed by React.
   *                         Contains details about the change event.
   *
   * event.target       → The <input> element itself
   * event.target.value → The current text the user has typed
   *
   * Example: If user types "Hello", this function runs 5 times:
   *   1st call: event.target.value = "H"
   *   2nd call: event.target.value = "He"
   *   3rd call: event.target.value = "Hel"
   *   4th call: event.target.value = "Hell"
   *   5th call: event.target.value = "Hello"
   */
  function handleChange(event) {
    console.log("You typed", event.target.value)
  }

  return (
    <div>
      {/*
        onChange={handleChange}

        Every time the user types in this input, the handleChange function
        is called with the event object.

        placeholder="Type here" — Shows gray hint text inside the input
        when it's empty, guiding the user on what to do.

        NOTE: Unlike Event.jsx where we used onClick={handleClick},
        here React automatically passes the 'event' object to handleChange.
        This happens for ALL event handlers — React always passes the
        event object as the first argument.
      */}
      <input onChange={handleChange} placeholder="Type here" />
    </div>
  )
}

/**
 * export default Change
 *
 * Default export — allows importing as: import Change from './Change'
 */
export default Change
