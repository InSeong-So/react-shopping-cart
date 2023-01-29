declare module 'global-types' {
  type ProductType = Record<
    'productId' | 'title' | 'src' | 'category' | 'classification' | 'price',
    string
  >;

  type ProductListType = ProductType[];
}

declare module 'client' {
  type FetchData<T> = T | null;
}

declare module 'components' {
  import type { ReactNode } from 'react';

  type ChildrenProps = {
    children: ReactNode;
  };
}
