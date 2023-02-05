import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
//
import { useFetchProduct } from '@/queries';
import { ProductItem } from '@/components';
import { ProductContainer } from '@/template/Product';

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();

  const { isLoading, data: product } = useFetchProduct(searchParams.get('productId') as string);

  if (isLoading) return <>로딩중</>;

  if (!product) return <>상품 정보가 존재하지 않습니다</>;

  return (
    <ProductContainer.Detail>
      <ProductItem type="detail" item={product} />
    </ProductContainer.Detail>
  );
};

export default memo(ProductDetailPage);
