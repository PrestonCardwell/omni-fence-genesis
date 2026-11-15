import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// Pages are pre-rendered to real HTML at build time (see scripts/prerender.mjs),
// so attach to that HTML instead of re-drawing it.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
