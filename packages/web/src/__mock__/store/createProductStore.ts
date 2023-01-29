import localforage from 'localforage';
import managedList from '../data/products';
//
import type { ProductListType } from 'global-types';

const createProductStore = () => {
  let _productStore: typeof localforage;

  return {
    async init() {
      if (_productStore) return;

      _productStore = localforage.createInstance({
        driver: localforage.INDEXEDDB,
        name: 'parang-shopping-products',
      });

      await _productStore.setItem<ProductListType>('products', managedList);
    },
    async getProducts(start: number, end: number) {
      const products = (await _productStore.getItem<ProductListType>('products')) || [];
      const parsedProducts = products.slice(start - 1, end).map((v) => v);

      return parsedProducts;
    },
    async getProductById(productId: string) {
      const products = (await _productStore.getItem<ProductListType>('products')) || [];
      const findedProduct = products.find((v) => v.productId === productId);

      return findedProduct;
    },
  };
};

export default createProductStore();
