import PaymentCard from '@/template/PaymentCard';
import {
  CartTitle,
  CartList,
  cartContainerStyle,
  cartAreaStyle,
  cartLeftSectionStyle,
  cartRightSectionStyle,
} from '@/template/Cart';

const CartPage = () => (
  <section style={cartContainerStyle}>
    <CartTitle />
    <div style={cartAreaStyle}>
      <section style={cartLeftSectionStyle}>
        <CartList />
      </section>
      <section style={cartRightSectionStyle}>
        <PaymentCard />
      </section>
    </div>
  </section>
);

export default CartPage;
