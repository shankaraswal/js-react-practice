# React + Vite Practice Sandbox 🚀

A comprehensive React 19 and Vite laboratory repository built with Tailwind CSS v4, dynamic component importing, and custom hooks. Live deployment is hosted on GitHub Pages.

🌐 **Live Demo:** [https://shankaraswal.github.io/js-react-practice/](https://shankaraswal.github.io/js-react-practice/)

---

## 🛠️ Tech Stack & Tooling

* **Core Framework:** React 19, Vite
* **Styling:** Tailwind CSS v4
* **Syntax Highlighting:** `react-syntax-highlighter` (Prism / `atomDark`)
* **Code Quality:** ESLint
* **Deployment:** `gh-pages`

---

## ✨ Key Features & Demonstrations

### 1. `useLocalStorage` Custom Hook
A robust React hook designed to safely manage Local Storage synchronization without stale states or crashing on unparsed JSON string values.
* **Full CRUD Operations:** Support for `setStorageData`, `getStorageData`, `getAllKeyVals`, and `removeStorageData`.
* **Safe JSON Parsing:** Built-in `try-catch` fallbacks to handle plain text strings alongside structured objects/arrays.
* **Auto-Resetting Forms:** Clean input management for setting and inspecting key/value pairs in real time.

### 2. Dynamic Component Showcase & Source Viewer
* **Dynamic Imports:** Uses `import.meta.glob` to load components lazily (`Suspense`) directly from `./react-comps/*.jsx`.
* **Interactive Code Accordions:** Built-in source code viewer with line numbers and toggleable expand/collapse mechanics for each demo component.

---

## 📂 Project Structure

```text
js-react-practice/
├── public/
│   └── sa.svg              # Custom "SA" favicon
├── src/
│   ├── hooks/
│   │   └── useLocalStorage.js # Custom Local Storage hook
│   ├── react-comps/        # Individual practice components
│   ├── App.jsx             # Main application container
│   └── ReactComps.jsx      # Dynamic showcase viewer with source accordion
├── package.json
└── vite.config.js          # Configured with GitHub Pages base path
