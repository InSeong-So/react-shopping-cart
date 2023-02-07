import { cartsAtom } from '@/stores';
import { useMutation, useQuery } from '@tanstack/react-query';
//
import {
  addCarts,
  deleteProductFromCarts,
  getCarts,
  selectAllProductFromCart,
  selectProductFromCart,
  updateProductQuantityFromCarts,
} from '@/client';
import { useSetAtom } from 'jotai';

export const useFetchCartList = () => {
  const setCarts = useSetAtom(cartsAtom);
  return useQuery(['fetch', 'carts'], getCarts, {
    onSuccess(item) {
      if (!item) return;
      setCarts(item);
    },
  });
};

export const useAddProductToCart = () => {
  const setCarts = useSetAtom(cartsAtom);
  return useMutation(['add', 'cart'], addCarts, {
    onSuccess(item) {
      if (!item) return;
      setCarts(item);
    },
  });
};

export const useUpdateQuantityFromCart = () => {
  const setCarts = useSetAtom(cartsAtom);
  return useMutation(['patch', 'cart', 'quantity'], updateProductQuantityFromCarts, {
    onSuccess(item) {
      if (!item) return;
      setCarts(item);
    },
  });
};

export const useSelectProductFromCart = () => {
  const setCarts = useSetAtom(cartsAtom);
  return useMutation(['patch', 'cart', 'select'], selectProductFromCart, {
    onSuccess(item) {
      if (!item) return;
      setCarts(item);
    },
  });
};

export const useSelectAllProductFromCart = () => {
  const setCarts = useSetAtom(cartsAtom);
  return useMutation(['patch', 'cart', 'select', 'all'], selectAllProductFromCart, {
    onSuccess(item) {
      if (!item) return;
      setCarts(item);
    },
  });
};

export const useDeleteProductFromCart = () => {
  const setCarts = useSetAtom(cartsAtom);
  return useMutation(['delete', 'cart'], deleteProductFromCarts, {
    onSuccess(item) {
      if (!item) return;
      setCarts(item);
    },
  });
};
