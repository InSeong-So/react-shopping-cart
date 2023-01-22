import { ProductItem } from '@/components';
import useMediaQuery from '@/hooks/useMedia';
import styles from './Product.styled';

const ProductList = () => {
  const isMedium = useMediaQuery('(min-width: 767px) and (max-width: 1023px)');
  const isSmall = useMediaQuery('(max-width: 767px)');

  return (
    <section style={styles.productListContainer({ isMedium, isSmall })}>
      {Array.from({ length: 20 }).map((_, index) => (
        <ProductItem key={index} />
      ))}
    </section>
  );
};

export default ProductList;
