import type { StyledComponentProps, ResponsiveStyledComponentProps } from 'components';

export const dynamicStyles: ResponsiveStyledComponentProps = {
  productListContainer: ({ isMedium = false, isSmall = false }) => ({
    maxWidth: 1300,

    display: 'grid',
    gridTemplateColumns: `repeat(${isMedium ? 2 : isSmall ? 1 : 4}, 1fr)`,
    gridTemplateRows: 'max-content',
    justifyContent: 'center',
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
