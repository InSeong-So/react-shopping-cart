import { useEffect, useRef } from 'react';

type InfiniteScrollBoxProps = {
  callback: () => void;
  hasNext: boolean;
};

const options = {
  root: document.querySelector('#scroll-area'),
  rootMargin: '0px',
  threshold: 1.0,
};

const InfiniteScrollBox = ({ callback, hasNext }: InfiniteScrollBoxProps) => {
  const divInfiniteScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio > 0 && entry.isIntersecting && hasNext) callback();
    }, options);

    if (divInfiniteScrollRef.current) intersectionObserver.observe(divInfiniteScrollRef.current);

    return () => intersectionObserver.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divInfiniteScrollRef]);

  return <div ref={divInfiniteScrollRef} />;
};

export default InfiniteScrollBox;
