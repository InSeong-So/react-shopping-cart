import type { ChildrenProps } from 'components';
import styles from './Cart.styled';

const CartContainer = ({ children }: ChildrenProps) => (
  <section style={styles.cartContainer}>{children}</section>
);

export default CartContainer;
