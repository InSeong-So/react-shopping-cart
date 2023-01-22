import { useEffect, useMemo, useState } from 'react';

const useMediaQuery = (mediaQueryString: string) => {
  const query = useMemo(() => window.matchMedia(mediaQueryString), [mediaQueryString]);
  const [matches, setMatches] = useState(query.matches);

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    query.addEventListener('change', listener);

    return () => query.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
