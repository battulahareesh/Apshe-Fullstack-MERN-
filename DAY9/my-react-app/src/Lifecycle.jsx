/**
 * ============================================================
 * Lifecycle.jsx — DEMONSTRATES useEffect HOOK & API FETCHING
 * ============================================================
 *
 * CONCEPT: COMPONENT LIFECYCLE
 * Every React component goes through a "lifecycle":
 *   1. MOUNTING   — Component appears on the screen for the first time
 *   2. UPDATING   — Component re-renders due to state/prop changes
 *   3. UNMOUNTING — Component is removed from the screen
 *
 * The useEffect Hook lets you run code at specific points in this lifecycle.
 * It replaces the old class-based lifecycle methods (componentDidMount,
 * componentDidUpdate, componentWillUnmount).
 *
 * CONCEPT: useEffect SYNTAX
 *   useEffect(callbackFunction, dependencyArray)
 *
 *   - callbackFunction → The code to run (the "effect" / "side effect")
 *   - dependencyArray  → Controls WHEN the effect runs:
 *       []           → Run ONCE after the first render (mounting)
 *       [value]      → Run when 'value' changes
 *       (no array)   → Run after EVERY render (rarely wanted)
 *
 * CONCEPT: WHAT IS AN API?
 * API (Application Programming Interface) is a way for different software
 * to communicate. Here, we fetch data from a REST API on the internet.
 * The API returns data in JSON format (JavaScript Object Notation).
 *
 * CONCEPT: WHAT IS fetch()?
 * fetch() is a built-in browser function to make HTTP requests (like
 * visiting a URL, but from JavaScript code). It returns a "Promise"
 * — a value that will be available in the future (when the server responds).
 */

// ─── IMPORTS ────────────────────────────────────────────────

/**
 * useState  — To store the fetched posts data in state
 * useEffect — To fetch data when the component first appears (mounts)
 */
import { useState, useEffect } from "react";

// ─── LIFECYCLE COMPONENT ────────────────────────────────────

/**
 * Lifecycle — Demonstrates useEffect by fetching posts from a public API.
 *
 * When this component appears on the screen, it:
 *   1. Shows an empty list (initial state)
 *   2. Fetches post data from the JSONPlaceholder API
 *   3. Updates state with the fetched data
 *   4. React re-renders to display the posts
 */
const Lifecycle = () => {

  /**
   * STATE: 'posts' holds the array of post objects fetched from the API.
   *
   * Initial value is an empty array [] because we haven't fetched data yet.
   * After the API call succeeds, this will contain objects like:
   *   { id: 1, title: "...", body: "...", userId: 1 }
   */
  const [posts, setPosts] = useState([]);

  /**
   * useEffect — Runs the API fetch when the component MOUNTS (first render).
   *
   * BREAKDOWN:
   *   - First argument: A callback function containing the "effect" (our API call)
   *   - Second argument: [] (empty dependency array)
   *
   * The EMPTY DEPENDENCY ARRAY [] means:
   *   "Run this effect ONCE, after the component's first render, and never again."
   *
   * This is perfect for fetching initial data because we only need to
   * load the posts ONE TIME when the page loads.
   *
   * WITHOUT []: The effect would run after EVERY render, causing an
   * infinite loop: fetch → setPosts → re-render → fetch → setPosts → ...
   *
   * ⚠️ WARNING: Never forget the dependency array when fetching data!
   */
  useEffect(() => {
    /**
     * fetch() — Makes an HTTP GET request to the JSONPlaceholder API.
     *
     * JSONPlaceholder (https://jsonplaceholder.typicode.com) is a free
     * fake REST API for testing. It returns dummy data (posts, users, etc.)
     * that looks like real data — perfect for learning!
     *
     * THE PROMISE CHAIN (.then().then().catch()):
     *
     * fetch() returns a Promise. We handle it with .then() chains:
     *
     *   Step 1: fetch("url")
     *     → Sends a request to the URL and waits for the response
     *
     *   Step 2: .then((response) => response.json())
     *     → The raw response isn't usable yet. response.json() parses
     *       the response body from JSON text into a JavaScript array/object.
     *       This ALSO returns a Promise (parsing takes time).
     *
     *   Step 3: .then((data) => setPosts(data))
     *     → Now we have the actual data! We store it in state using setPosts.
     *       React re-renders the component, and the posts appear on screen.
     *
     *   Step 4: .catch((error) => console.log(error))
     *     → If ANYTHING goes wrong (no internet, server error, invalid URL),
     *       the error is caught here and logged to the console.
     *       Without .catch(), errors would be silently ignored.
     */
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())   // Parse JSON response into JS object
      .then((data) => setPosts(data))         // Store the parsed data in state
      .catch((error) => console.log(error));  // Handle any errors gracefully
  }, []); // ← Empty dependency array: run ONCE on mount only

  return (
    <div>
      <h2>Posts List</h2>

      {/*
        RENDERING A LIST IN REACT using .map()

        posts.map() — Loops through each post in the 'posts' array and
        returns a JSX element for each one. This is how React renders lists.

        .map() is a JavaScript array method that:
          1. Takes a function as an argument
          2. Calls that function for EACH item in the array
          3. Returns a NEW array with the results

        Example: [1, 2, 3].map(x => x * 2) → [2, 4, 6]

        KEY PROP: key={post.id}
        React requires a unique 'key' prop on each list item so it can
        efficiently track which items changed, were added, or removed.
        Without keys, React would re-render the entire list on every change.

        ⚠️ RULES FOR KEYS:
          - Must be UNIQUE among siblings (no two posts should have the same key)
          - Should be STABLE (don't use Math.random() or array index if items reorder)
          - Use a unique ID from your data (like post.id) whenever possible
      */}
      {posts.map((post) => (
        <div key={post.id}>
          {/* Display the post title in a heading */}
          <h3>{post.title}</h3>
          {/* Display the post body text in a paragraph */}
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

/**
 * export default Lifecycle
 *
 * Default export — imported as: import Lifecycle from './Lifecycle'
 */
export default Lifecycle;
