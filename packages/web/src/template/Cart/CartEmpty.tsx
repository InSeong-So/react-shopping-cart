import styles from './Cart.styled';

const CartEmpty = () => {
  return (
    <div style={styles.cartEmptyContainer}>
      <span>오, 이런!</span>
      <span>장바구니가 비었어요!</span>
    </div>
  );
};

export default CartEmpty;
