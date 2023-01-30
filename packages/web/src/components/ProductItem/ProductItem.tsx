import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
//
import { CartIcon } from '@/icons';
import styles from './ProductItem.styled';
import Divide from '../Divide';
//
import type { ProductType } from 'global-types';
//

type ProductProps = {
  item: ProductType;
  type?: 'detail' | 'normal';
};

const ProductItem = ({ item, type = 'normal' }: ProductProps) => {
  const navigate = useNavigate();

  const handleClickGoToDetailPage = () => {
    navigate(`/product-detail?productId=${item.productId}`);
  };

  return (
    <>
      {type === 'normal' ? (
        <div style={styles.productItemContainer} onClick={handleClickGoToDetailPage}>
          <img style={styles.productItemImage} src={item.src} alt={item.title} />
          <div style={styles.productItemArea}>
            <div style={styles.productItemInfo}>
              <span style={styles.productItemInfoName}>{item.title}</span>
              <span style={styles.productItemInfoPrice}>{item.price}원</span>
            </div>
            <div style={styles.productItemInfoIconArea}>
              <CartIcon />
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.productDetailItemContainer}>
          <img style={styles.productDetailItemImage} src={item.src} alt={item.title} />
          <div style={styles.productDetailItemInfo}>
            <span style={styles.productDetailItemInfoTitle}>{item.title}</span>
            <Divide $theme="thin" />
            <div style={styles.productDetailItemInfoArea}>
              <span>금액</span>
              <span>{item.price}원</span>
            </div>
          </div>
          <button style={styles.productDetailButton}>장바구니</button>
        </div>
      )}
    </>
  );
};
export default memo(ProductItem);
