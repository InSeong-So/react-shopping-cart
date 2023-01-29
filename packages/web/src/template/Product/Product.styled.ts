import type { CSSProperties } from 'react';

type StyledComponentProps<P = CSSProperties, T extends string = string> = Record<T, P>;

export const dynamicStyles: StyledComponentProps<
  (params: { isMedium?: boolean; isSmall?: boolean }) => CSSProperties
> = {
  productListContainer: ({ isMedium = false, isSmall = false }) => ({
    maxWidth: 1300,

    display: 'grid',
    gridTemplateColumns: `repeat(${isMedium ? 2 : isSmall ? 1 : 4}, 1fr)`,
    gap: '27px 17px',

    padding: '60px 0',
  }),
};

export const styles: StyledComponentProps = {
  productDetailContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: '60px 0',
  },
};
