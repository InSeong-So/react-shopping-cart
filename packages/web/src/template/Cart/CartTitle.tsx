import { Divide } from '@/components';
import styles from './Cart.styled';

const CartTitle = () => (
  <header style={styles.cartHeader}>
    <h2 style={styles.cartHeaderTitle}>장바구니</h2>
    <Divide />
  </header>
);

export default CartTitle;
