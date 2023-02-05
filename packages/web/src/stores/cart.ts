import { ProductType } from 'global-types';
import { atom } from 'jotai';

export const cartsAtom = atom<ProductType[]>([]);

export const cartTotalPriceAtom = atom((get) =>
  get(cartsAtom)
    .reduce((acc, { price, quantity }) => acc + parseInt(price.replace(/\D/g, '')) * quantity, 0)
    .toLocaleString(),
);
