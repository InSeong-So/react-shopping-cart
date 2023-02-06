import { ProductType } from 'global-types';
import { atom } from 'jotai';

export const cartsAtom = atom<ProductType[]>([]);

export const cartTotalPriceAtom = atom((get) =>
  get(cartsAtom)
    .reduce(
      (acc, { price, quantity, isChecked }) =>
        isChecked ? acc + parseInt(price.replace(/\D/g, '')) * quantity : 0,
      0,
    )
    .toLocaleString(),
);
