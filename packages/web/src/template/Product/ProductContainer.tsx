import useMediaQuery from '@/hooks/useMedia';
import { dynamicStyles, styles } from './Product.styled';
//
import { memo, PropsWithChildren } from 'react';

const ProductListContainer = ({ id, children }: PropsWithChildren<{ id: string }>) => {
  const isMedium = useMediaQuery('medium');
  const isSmall = useMediaQuery('small');

  return (
    <section id={id} style={dynamicStyles.productListContainer({ isMedium, isSmall })}>
      {children}
    </section>
  );
};

const ProductDetailContainer = ({ children }: PropsWithChildren<void>) => (
  <section style={styles.productDetailContainer}>{children}</section>
);

const ProductContainer = {
  List: memo(ProductListContainer),
  Detail: memo(ProductDetailContainer),
};

export default ProductContainer;
