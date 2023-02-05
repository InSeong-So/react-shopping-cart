import { useQuery } from '@tanstack/react-query';
//
import { getProducts, getProductById } from '@/client';

export const useFetchProductList = (page: number) => {
  return useQuery(['fetch', 'products', page], () => getProducts(page));
};

export const useFetchProduct = (productId: string) => {
  return useQuery(['fetch', 'product', productId], () => getProductById(productId));
};
