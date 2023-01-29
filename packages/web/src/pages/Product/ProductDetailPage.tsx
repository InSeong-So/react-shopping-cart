import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductItem } from '@/components';
import { ProductContainer } from '@/template/Product';
import useFetch from '@/client/useFetch';
import { ProductType } from 'global-types';

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useFetch<ProductType>(
    `/product?productId=${searchParams.get('productId')}`,
  );

  if (isLoading) return <>로딩중</>;

  if (!data) return <>상품 정보가 존재하지 않습니다</>;

  return (
    <ProductContainer.Detail>
      <ProductItem type="detail" item={data} />
    </ProductContainer.Detail>
  );
};

export default memo(ProductDetailPage);
