import { memo, useCallback, useEffect, useRef, useState } from 'react';
//
import { InfiniteScrollBox, ProductItem } from '@/components';
import { ProductContainer, useFetchProducts } from '@/template/Product';
//
import type { ProductListType } from 'global-types';

const ProductListPage = () => {
  const page = useRef(1);
  const [hasNext, setHasNext] = useState(true);
  const [products, setProducts] = useState<ProductListType>([]);

  const handleScroll = useCallback(() => {
    page.current += 1;
  }, []);

  const { data, isLoading } = useFetchProducts(page.current);

  useEffect(() => {
    if (!data) return;

    setProducts([...products, ...data]);
    setHasNext(data.length === 8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page.current]);

  return (
    <ProductContainer.List id="scroll-area">
      {products.map((item) => (
        <ProductItem key={item.productId} item={item} />
      ))}
      {isLoading && <>로딩중</>}
      <InfiniteScrollBox callback={handleScroll} hasNext={hasNext} />
    </ProductContainer.List>
  );
};

export default memo(ProductListPage);
