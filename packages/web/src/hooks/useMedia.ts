import { useEffect, useMemo, useState } from 'react';

type MediaQueryKey = 'medium' | 'small';

const 반응형_넓이_뷰포트 = {
  large: '(min-width: 1025px)',
  medium: '(min-width: 768px) and (max-width: 1024px)',
  small: '(max-width: 767px)',
};

const useMediaQuery = (mediaQueryString: 'medium' | 'small' | string) => {
  const $mediaQueryString = ['medium', 'small'].includes(mediaQueryString)
    ? 반응형_넓이_뷰포트[mediaQueryString as MediaQueryKey]
    : mediaQueryString;
  const query = useMemo(() => window.matchMedia($mediaQueryString), [$mediaQueryString]);
  const [matches, setMatches] = useState(query.matches);

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    query.addEventListener('change', listener);

    return () => query.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
