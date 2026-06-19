/**
 * ============================================================
 * eslint.config.js — CODE QUALITY & LINTING CONFIGURATION
 * ============================================================
 *
 * WHAT IS ESLINT?
 * ESLint is a tool that analyzes your JavaScript/JSX code to find
 * potential bugs, bad practices, and style issues BEFORE you run the app.
 * Think of it as a "spell-checker" but for code.
 *
 * Example: ESLint can warn you if you:
 *   - Declare a variable but never use it
 *   - Forget to add a 'key' prop when rendering lists in React
 *   - Use React Hooks incorrectly (e.g., calling useState inside a loop)
 *
 * Run ESLint with: npm run lint
 */

// 'js' — The core ESLint JavaScript rules (recommended best practices).
import js from '@eslint/js'

// 'globals' — Provides a list of known global variables for different
// environments (browser, Node.js, etc.) so ESLint doesn't flag them
// as "undefined". Example: 'window', 'document', 'console'.
import globals from 'globals'

// 'reactHooks' — Enforces the "Rules of Hooks" in React:
//   - Only call Hooks (useState, useEffect, etc.) at the top level
//   - Only call Hooks from React function components or custom Hooks
import reactHooks from 'eslint-plugin-react-hooks'

// 'reactRefresh' — Ensures components are compatible with React Fast Refresh
// (the feature that updates your app instantly when you save a file).
import reactRefresh from 'eslint-plugin-react-refresh'

// 'defineConfig' — Helper to define the ESLint configuration with type safety.
// 'globalIgnores' — Tells ESLint which folders/files to skip entirely.
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignore the 'dist' folder — this contains the production build output
  // and doesn't need to be linted (it's auto-generated code).
  globalIgnores(['dist']),
  {
    // Apply these rules to all .js and .jsx files in the project
    files: ['**/*.{js,jsx}'],

    // 'extends' — Inherit rules from these pre-made configurations:
    extends: [
      js.configs.recommended,              // ESLint's recommended JS rules
      reactHooks.configs.flat.recommended,  // React Hooks best practices
      reactRefresh.configs.vite,            // React Refresh compatibility rules
    ],

    // Language options — Tell ESLint about our code environment
    languageOptions: {
      // 'globals.browser' — Recognize browser globals (window, document, etc.)
      // so ESLint doesn't report them as undefined variables.
      globals: globals.browser,

      // 'parserOptions' — Enable JSX syntax parsing so ESLint can
      // understand React's HTML-like syntax inside JavaScript files.
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
