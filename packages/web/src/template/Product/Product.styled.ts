import type { CSSProperties } from 'react';

type StyledComponentProps<T extends string = string, P = any> = Record<
  T,
  (params: P) => CSSProperties
>;

const styles: StyledComponentProps<string, { isMedium?: boolean; isSmall?: boolean }> = {
  productListContainer: ({ isMedium = false, isSmall = false }) => ({
    maxWidth: 1400,

    display: 'grid',
    gridTemplateColumns: `repeat(${isMedium ? 2 : isSmall ? 1 : 4}, 1fr)`,
    gap: '27px 17px',

    padding: '60px 0',
  }),
};

export default styles;
