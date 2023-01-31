import { useState, useRef, useCallback, useEffect } from 'react';

function useInfiniteScroll() {
  const [page, setPage] = useState(1);
  const loadMoreRef = useRef(null);

  const handleObserver = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (!entry.isIntersecting) return;

    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  return { loadMoreRef, page };
}

export default useInfiniteScroll;
