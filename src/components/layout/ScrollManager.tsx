import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to hash targets (retrying while lazy routes mount) or to top on route change. */
export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      let attempts = 0;
      let timer: number;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 20) {
          attempts += 1;
          timer = window.setTimeout(tryScroll, 60);
        }
      };
      tryScroll();
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return undefined;
  }, [location.pathname, location.hash, location.key]);

  return null;
}