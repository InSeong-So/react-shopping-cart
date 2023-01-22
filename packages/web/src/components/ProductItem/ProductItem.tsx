import { CartIcon } from '@/icons';
import styles from './ProductItem.styled';
//
import DefaultImage from '/images/cake/당근_피칸_케이크.jpeg';

interface ProductProps {
  imgSrc?: string;
  desc?: string;
}

const ProductItem = ({
  imgSrc = DefaultImage,
  desc = 'parang-shop-product-item',
}: ProductProps) => (
  <div>
    <img src={imgSrc} alt={desc} />
    <div style={styles.productItemWrapper}>
      <div style={styles.productItemInfo}>
        <span style={styles.productItemInfoName}>PET보틀-정사각(420ml)</span>
        <span style={styles.productItemInfoPrice}>43,000원</span>
      </div>
      <CartIcon />
    </div>
  </div>
);

export default ProductItem;
