import { Button } from '@/components';
import styles from './OrderItem.styled';

type OrderItemProps = {
  type?: 'confirm' | 'add';
};

const OrderItem = ({ type }: OrderItemProps) => (
  <div style={styles.orderItemContainer}>
    <div style={styles.orderItemArea}>
      <img
        style={styles.orderItemImage}
        src="assets/images/product.png"
        alt="PET보틀-정사각(420ml)"
      />
      <div style={styles.orderItemInfo}>
        <span className="order-name">PET보틀-정사각(420ml)</span>
        <span>{type === 'add' && '54,800원 / '} 수량: 3</span>
      </div>
    </div>
    {type === 'add' && (
      <Button className="primary-button-small flex-center self-start">장바구니</Button>
    )}
  </div>
);

export default OrderItem;
