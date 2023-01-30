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
  const { loading, data } = useFetch<ProductListType>(page);

  useEffect(() => {
    if (!data) return;
    setProducts([...products, ...data]);
  }, [data, page]);

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
