import { Payment } from '@/components';
import { CartTitle, CartList, CartContainer } from '@/template/Cart';
//
import type { CSSProperties } from 'react';

const CartPage = () => (
  <CartContainer>
    <CartTitle />
    <div style={style}>
      <CartList />
      <Payment />
    </div>
  </CartContainer>
);

export default CartPage;

const style: CSSProperties = {
  display: 'flex',
};
