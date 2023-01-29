import type { ProductListType } from 'global-types';

export type UseLoadProductsReturnTypes = {
  loading: boolean;
  hasNextPage: boolean;
  products: ProductListType;
  loadMore: () => void;
  error: string | null;
};
