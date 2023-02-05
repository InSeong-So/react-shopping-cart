declare module 'global-types' {
  type ProductType = {
    productId: string;
    title: string;
    src: string;
    category: string;
    classification: string;
    price: string;
    quantity: number;
    isChecked?: boolean;
  };
}

declare module 'client' {
  type FetchData<T> = T | null;
}

declare module 'components' {
  import type { CSSProperties } from 'react';

  type MediaQueryType = { isLarge?: boolean; isMedium?: boolean; isSmall?: boolean };

  type StyledComponentProps<P = CSSProperties, T extends string = string> = Record<T, P>;

  type ResponsiveStyledComponentProps<T extends string = string> = StyledComponentProps<
    (params: MediaQueryType) => CSSProperties,
    T
  >;
}
