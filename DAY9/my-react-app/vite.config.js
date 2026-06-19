/**
 * ============================================================
 * vite.config.js — VITE BUILD TOOL CONFIGURATION
 * ============================================================
 *
 * WHAT IS VITE?
 * Vite (French word for "fast") is a modern build tool for web projects.
 * It does two main things:
 *   1. DEVELOPMENT SERVER — Runs your app locally with hot-reload
 *      (changes appear instantly in the browser without full page refresh).
 *   2. PRODUCTION BUILD — Bundles and optimizes your code for deployment.
 *
 * This file tells Vite HOW to process our project.
 */

// 'defineConfig' — A helper function from Vite that provides autocomplete
// and type-checking for configuration options.
import { defineConfig } from 'vite'

// 'react' — The official Vite plugin for React. It enables:
//   - JSX transformation (converting <Component /> syntax into JavaScript)
//   - Fast Refresh (instant updates in the browser when you save a file)
// 'reactCompilerPreset' — A Babel preset for the React Compiler,
//   which automatically optimizes React components for better performance.
import react, { reactCompilerPreset } from '@vitejs/plugin-react'

// 'babel' — A plugin that integrates Babel (a JavaScript compiler/transpiler)
// with Vite. Babel converts modern/experimental JavaScript into code that
// all browsers can understand.
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  /**
   * plugins — An array of Vite plugins to extend its functionality.
   *
   * react()  — Enables React support (JSX, Fast Refresh, etc.)
   * babel()  — Runs the React Compiler through Babel for automatic
   *            performance optimizations of your React components.
   */
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
