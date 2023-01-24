import { CartIcon } from '@/icons';
import styles from './ProductItem.styled';
import Divide from '../Divide';
//
import DefaultImage from '/images/cake/당근_피칸_케이크.jpeg';

type ProductProps = {
  imgSrc?: string;
  desc?: string;
  type?: 'detail' | 'normal';
};

const ProductItem = ({
  imgSrc = DefaultImage,
  desc = 'parang-shop-product-item',
  type = 'normal',
}: ProductProps) =>
  type === 'normal' ? (
    <div style={styles.productItemContainer}>
      <img src={imgSrc} alt={desc} />
      <div style={styles.productItemArea}>
        <div style={styles.productItemInfo}>
          <span style={styles.productItemInfoName}>PET보틀-정사각(420ml)</span>
          <span style={styles.productItemInfoPrice}>43,000원</span>
        </div>
        <div style={styles.productItemInfoIconArea}>
          <CartIcon />
        </div>
      </div>
    </div>
  ) : (
    <div style={styles.productDetailItemContainer}>
      <img style={styles.productDetailItemImage} src={imgSrc} alt={desc} />
      <div style={styles.productDetailItemInfo}>
        <span style={styles.productDetailItemInfoTitle}>PET보틀-정사각(420ml)</span>
        <Divide $theme="thin" />
        <div style={styles.productDetailItemInfoArea}>
          <span>금액</span>
          <span>43,000원</span>
        </div>
      </div>
      <button style={styles.productDetailButton}>장바구니</button>
    </div>
  );

export default ProductItem;
