import { memo, useLayoutEffect, useState } from 'react';
//
import { useFetchProductList } from '@/queries';
import { ProductItem } from '@/components';
import { ProductContainer } from '@/template/Product';
import useInfiniteScroll from '@/hooks/useInifiteScroll';
//
import type { ProductType } from 'global-types';

const ProductListPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { loadMoreRef, page } = useInfiniteScroll();
  const { isLoading, data } = useFetchProductList(page);

  useLayoutEffect(() => {
    if (!data) return;
    setProducts([...products, ...data]);
  }, [data]);

  return (
    <ProductContainer.List id="scroll-area">
      {products.map((item) => (
        <ProductItem key={item.productId} item={item} />
      ))}
      <div ref={loadMoreRef}>{isLoading && <>로딩 중</>}</div>
    </ProductContainer.List>
  );
};

export default memo(ProductListPage);
