import { ProductItem } from '@/components';

const ProductListPage = () => (
  <section className="product-container">
    {Array.from({ length: 20 }).map((_, index) => (
      <ProductItem key={index} />
    ))}
  </section>
);

export default ProductListPage;
