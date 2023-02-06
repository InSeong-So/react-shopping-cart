import { Divide, PageTitle } from '@/components';
import OrderItem from '@/components/OrderItem';
import {
  orderContainerStyle,
  orderPaymentAreaStyle,
  orderLeftSectionStyle,
  orderRightSectionStyle,
  orderPaymentTitleStyle,
} from '@/template/Order';
import PaymentCard from '@/template/PaymentCard';

const OrderPage = () => (
  <section style={orderContainerStyle}>
    <PageTitle>주문/결제</PageTitle>

    <h3 style={orderPaymentTitleStyle}>주문 상품(3건)</h3>
    <div style={orderPaymentAreaStyle}>
      <section style={orderLeftSectionStyle}>
        <Divide $theme="gray" />
        {Array.from({ length: 3 }, (_, index) => (
          <>
            <OrderItem key={index} type="confirm" />
            <Divide $theme="thin" />
          </>
        ))}
      </section>
      <section style={orderRightSectionStyle}>
        <PaymentCard price="325,600" count={4} type="order" />
      </section>
    </div>
  </section>
);

export default OrderPage;
