import { useMemo } from 'react';
//
import useFetch from '@/client';
//
import type { ProductListType } from 'global-types';

const useFetchProducts = (page = 1) => {
  const url = useMemo(() => `/products?start=${page * 8 - 7}&end=${page * 8}`, [page]);
  return useFetch<ProductListType>(url);
};

export default useFetchProducts;
