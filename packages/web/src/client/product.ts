import client from './config/ParangClient';
//
import type { ProductType } from 'global-types';

export const getProducts = async (page: number) => {
  const end = page * 8;
  const start = end - 7;

  const { data } = await client.get<ProductType[]>(`/products?start=${start}&end=${end}`);
  return data;
};

export const getProductById = async (productId: string) => {
  const { data } = await client.get<ProductType>(`/product?productId=${productId}`);
  return data;
};
