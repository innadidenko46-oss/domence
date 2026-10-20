import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/outfit/wght.css';
import '@fontsource-variable/plus-jakarta-sans/wght.css';
import './index.css';
import { AppShell } from './App.tsx';
import { initAnalytics } from './lib/analytics.ts';

// Old links used hash routes (/#/systemy). Turn them into normal paths
// before the router starts, so shared links keep working.
let rewritten = false;
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
  rewritten = true;
}

// Tidy up what older versions of the site kept in the browser: it now stores nothing.
try {
  localStorage.removeItem('domence_cookie_consent');
  localStorage.removeItem('domence_calc_v1');
} catch {
  /* storage blocked: nothing to remove */
}

initAnalytics();

const app = (
  <StrictMode>
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  </StrictMode>
);

// Pages built by scripts/prerender.mjs already contain their HTML: React takes it over.
// In development, or after a hash rewrite changed the page, it renders from scratch.
const root = document.getElementById('root')!;
if (root.hasChildNodes() && !rewritten) {
  hydrateRoot(root, app);
} else {
  root.textContent = '';
  createRoot(root).render(app);
}
