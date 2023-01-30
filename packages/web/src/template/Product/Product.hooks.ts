import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
//
import useFetch from '@/client';
//
import type { ProductListType } from 'global-types';

const useFetchProducts = () => {
  const page = useRef(1);
  const [hasNext, setHasNext] = useState(true);
  const [products, setProducts] = useState<ProductListType>([]);

  const { data, isLoading } = useFetch<ProductListType>(
    `/products?start=${page.current * 8 - 7}&end=${page.current * 8}`,
  );

  useEffect(() => {
    if (!data) return;

    setProducts([...products, ...data]);
    setHasNext(data.length === 8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    data: products,
    isLoading,
    handleScroll: () => {
      page.current += 1;
    },
    hasNext,
  };
};

export default useFetchProducts;
