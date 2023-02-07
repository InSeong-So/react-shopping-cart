import { atom } from 'jotai';
//
import type { ProductType } from 'global-types';

export const cartsAtom = atom<ProductType[]>([]);

export const cartTotalPriceAtom = atom((get) =>
  get(cartsAtom)
    .reduce(
      (acc, { price, quantity, isChecked }) =>
        isChecked ? acc + parseInt(price.replace(/\D/g, '')) * quantity : acc,
      0,
    )
    .toLocaleString(),
);
