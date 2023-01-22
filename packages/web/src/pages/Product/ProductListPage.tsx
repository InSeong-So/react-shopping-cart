import { ProductItem } from '@/components';
import { ProductContainer } from '@/template/Product';

const ProductListPage = () => {
  return (
    <ProductContainer.List>
      {Array.from({ length: 20 }).map((_, index) => (
        <ProductItem key={index} />
      ))}
    </ProductContainer.List>
  );
};

export default ProductListPage;
