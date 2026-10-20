import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// New page: start at the top, unless the address points to a section (#…)
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};
