import { PageTitle } from '@/components';
import {
  CartList,
  cartContainerStyle,
  cartAreaStyle,
  cartLeftSectionStyle,
  cartRightSectionStyle,
} from '@/template/Cart';
import PaymentCard from '@/template/PaymentCard';

const CartPage = () => (
  <section style={cartContainerStyle}>
    <PageTitle>장바구니</PageTitle>
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
