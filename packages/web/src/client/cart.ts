import client from './config/ParangClient';
//
import type { ProductType } from 'global-types';

export const getCarts = async () => {
  const { data } = await client.get<ProductType[]>('/carts');
  return data;
};

export const addCarts = async (item: ProductType) => {
  item.isChecked = true;

  const { data } = await client.post<ProductType[]>('/carts', { item });
  return data;
};

export const updateProductQuantityFromCarts = async (item: ProductType) => {
  const { data } = await client.patch<ProductType[]>('/carts', { item });
  return data;
};

export const selectProductFromCart = async (productId: string) => {
  const { data } = await client.patch<ProductType[]>('/cart/item-select', { productId });
  return data;
};

export const selectAllProductFromCart = async (isChecked: boolean) => {
  const { data } = await client.patch<ProductType[]>('/cart/item-select-all', { isChecked });
  return data;
};

export const deleteProductFromCarts = async (productId: string) => {
  const { data } = await client.delete<ProductType[]>(`/carts?productId=${productId}`);
  return data;
};
