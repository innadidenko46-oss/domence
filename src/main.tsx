import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Old links used hash routes (/domence/#/systemy). Turn them into normal paths
// before the router starts, so shared links keep working.
if (window.location.hash.startsWith('#/')) {
  const path = window.location.hash.slice(1);
  window.history.replaceState(null, '', import.meta.env.BASE_URL.replace(/\/$/, '') + path);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
