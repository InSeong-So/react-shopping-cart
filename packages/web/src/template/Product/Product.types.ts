import type { ProductType } from 'global-types';

export type UseLoadProductsReturnTypes = {
  loading: boolean;
  hasNextPage: boolean;
  products: ProductType[];
  loadMore: () => void;
  error: string | null;
};
