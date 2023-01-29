import { Button } from '@/components';
import styles from './OrderItem.styled';
//
import { 당근_피칸_케이크 } from 'assets';

type OrderItemProps = {
  imgSrc?: string;
  desc?: string;
  type?: 'confirm' | 'add';
};

const OrderItem = ({
  imgSrc = 당근_피칸_케이크,
  desc = 'parang-shop-product-item',
  type,
}: OrderItemProps) => (
  <div style={styles.orderItemContainer}>
    <div style={styles.orderItemArea}>
      <img style={styles.orderItemImage} src={imgSrc} alt={desc} />
      <div style={styles.orderItemInfo}>
        <span style={styles.orderItemInfoTitle}>PET보틀-정사각(420ml)</span>
        <span style={styles.orderItemInfoQuantity}>{type === 'add' && '54,800원 / '} 수량: 3</span>
      </div>
    </div>
    {type === 'add' && <Button $theme="primary">장바구니</Button>}
  </div>
);

export default OrderItem;
