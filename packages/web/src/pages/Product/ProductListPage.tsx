import { memo, useEffect, useState } from 'react';
//
import { ProductItem } from '@/components';
import { ProductContainer } from '@/template/Product';
import useInfiniteScroll from '@/hooks/useInifiteScroll';
import useFetch from '@/hooks/useFetch';
import { ProductListType } from 'global-types';

const ProductListPage = () => {
  const [products, setProducts] = useState<ProductListType>([]);
  const { loadMoreRef, page } = useInfiniteScroll();
  const { loading, data } = useFetch<ProductListType>(
    `/products?start=${page * 8 - 7}&end=${page * 8}`,
  );

  useEffect(() => {
    if (!data) return;
    setProducts((prev) => [...prev, ...data]);
  }, [data]);

  return (
    <ProductContainer.List id="scroll-area">
      {products.map((item) => (
        <ProductItem key={item.productId} item={item} />
      ))}
      <div ref={loadMoreRef}>{loading && <>로딩 중</>}</div>
    </ProductContainer.List>
  );
};

export default memo(ProductListPage);
