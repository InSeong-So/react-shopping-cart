import useMediaQuery from '@/hooks/useMedia';
import { dynamicStyles, styles } from './Product.styled';
//
import type { ChildrenProps } from 'components';

const ProductListContainer = ({ children }: ChildrenProps) => {
  const isMedium = useMediaQuery('(min-width: 767px) and (max-width: 1023px)');
  const isSmall = useMediaQuery('(max-width: 767px)');

  return (
    <section style={dynamicStyles.productListContainer({ isMedium, isSmall })}>{children}</section>
  );
};

const ProductDetailContainer = ({ children }: ChildrenProps) => (
  <section style={styles.productDetailContainer}>{children}</section>
);

const ProductContainer = {
  List: ProductListContainer,
  Detail: ProductDetailContainer,
};

export default ProductContainer;
