/**
 * ============================================================
 * Style.jsx — DEMONSTRATES INLINE STYLING IN REACT
 * ============================================================
 *
 * CONCEPT: There are 3 ways to style React components:
 *   1. EXTERNAL CSS — Import a .css file (like App.css, Style.css)
 *   2. INLINE STYLES — Use the 'style' attribute with a JavaScript object (THIS FILE)
 *   3. CSS MODULES — Scoped CSS files (advanced, not covered here)
 *
 * INLINE STYLES IN REACT:
 *   - In regular HTML:  <div style="background: black; padding: 16px">
 *   - In React JSX:     <div style={{ background: "black", padding: "16px" }}>
 *
 *   Key differences from HTML inline styles:
 *   - Use a JavaScript OBJECT (not a string)
 *   - Property names are camelCase (borderRadius, not border-radius)
 *   - Values are strings (wrapped in quotes)
 *   - Properties are separated by commas (not semicolons)
 *   - Double curly braces: outer {} = "this is JavaScript", inner {} = "this is an object"
 */

/**
 * Style — A function component that demonstrates inline CSS styling.
 *
 * This component creates a styled <div> box using a JavaScript style object.
 * The styles are defined as a variable (boxStyle) and passed to the
 * 'style' attribute of the JSX element.
 */
function Style() {

  /**
   * boxStyle — A JavaScript object containing CSS properties.
   *
   * Notice:
   *   - "borderRadius" instead of "border-radius" (camelCase in JS)
   *   - Values are strings: "black", "16px", "8px", "red"
   *   - This object could also be written directly inside the style attribute,
   *     but storing it in a variable keeps the JSX cleaner and more readable.
   */
  const boxStyle = {
    background: "black",      // Background color of the box
    padding: "16px",          // Space inside the box (between border and content)
    borderRadius: "8px",      // Rounded corners (8 pixels)
    color: "red",             // Text color
  };

  return (
    /**
     * The 'style' attribute in JSX accepts a JavaScript object.
     * Here we pass the 'boxStyle' object defined above.
     *
     * 'className' is React's version of HTML's 'class' attribute.
     * We use "className" because 'class' is a reserved keyword in JavaScript.
     * The "card" class is defined in Style.css for additional external styling.
     *
     * NOTE: When both inline styles and CSS class styles conflict,
     * INLINE styles take priority (they have higher specificity).
     * So boxStyle's "background: black" will override Style.css's "background: greenyellow".
     */
    <div className="card" style={boxStyle}>
      I am styled
    </div>
  );
}

/**
 * export default Style
 *
 * "default export" — Makes this the main export of the file.
 * Other files can import it as: import Style from './Style'
 * (No curly braces needed for default imports)
 */
export default Style;
