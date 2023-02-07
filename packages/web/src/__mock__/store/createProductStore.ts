import localforage from 'localforage';
import managedList from '../data/products';
//
import type { ProductType } from 'global-types';

const _productStore: typeof localforage = localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
  name: 'parang-shopping',
});

const createProductStore = () => {
  async function storedProducts() {
    return (await _productStore.getItem<ProductType[]>('products')) || [];
  }

  async function storedCarts() {
    return (await _productStore.getItem<ProductType[]>('carts')) || [];
  }

  return {
    async reset() {
      await _productStore.setItem<ProductType[]>('products', managedList);
      await _productStore.setItem<ProductType[]>('carts', []);
    },
    async init() {
      const products = await _productStore.getItem('products');
      const carts = await _productStore.getItem('carts');

      if (!products) await _productStore.setItem<ProductType[]>('products', managedList);
      if (!carts) await _productStore.setItem<ProductType[]>('carts', []);
    },
    async getProducts(start: number, end: number) {
      const products = await storedProducts();
      return products.slice(start - 1, end).map((v) => v);
    },
    async getProductById(productId: string) {
      const products = await storedProducts();
      return products.find((v) => v.productId === productId);
    },
    async getCarts() {
      return await storedCarts();
    },
    async addCarts(item: ProductType) {
      const prevCarts = await storedCarts();

      try {
        const isExistsItemIndex = prevCarts.findIndex(
          ({ productId }) => productId === item.productId,
        );
        if (isExistsItemIndex > -1)
          prevCarts[isExistsItemIndex].quantity = prevCarts[isExistsItemIndex].quantity + 1;

        const addedCarts = isExistsItemIndex > -1 ? prevCarts : [...prevCarts, item];
        await _productStore.setItem<ProductType[]>('carts', addedCarts);

        return addedCarts;
      } catch (error) {
        return prevCarts;
      }
    },
    async updateCartItem(item: ProductType) {
      const prevCarts = await storedCarts();

      try {
        const updatedCarts = prevCarts.map((cartItem) =>
          cartItem.productId === item.productId ? item : cartItem,
        );
        await _productStore.setItem<ProductType[]>('carts', updatedCarts);

        return updatedCarts;
      } catch (error) {
        return prevCarts;
      }
    },
    async selectCartItem(productId: string) {
      const prevCarts = await storedCarts();

      try {
        const updatedCarts = prevCarts.map((cartItem) =>
          cartItem.productId === productId
            ? { ...cartItem, isChecked: !cartItem.isChecked }
            : cartItem,
        );
        await _productStore.setItem<ProductType[]>('carts', updatedCarts);

        return updatedCarts;
      } catch (error) {
        return prevCarts;
      }
    },
    async selectAllCartItem(isChecked: boolean) {
      const prevCarts = await storedCarts();

      try {
        const updatedCarts = prevCarts.map((cartItem) => ({ ...cartItem, isChecked }));
        await _productStore.setItem<ProductType[]>('carts', updatedCarts);

        return updatedCarts;
      } catch (error) {
        return prevCarts;
      }
    },
    async deleteCartItem(productId: string) {
      const prevCarts = await storedCarts();

      try {
        const deletedCarts = prevCarts.filter((cartItem) => cartItem.productId !== productId);
        await _productStore.setItem<ProductType[]>('carts', deletedCarts);

        return deletedCarts;
      } catch (error) {
        return prevCarts;
      }
    },
  };
};

export default createProductStore();
