import { PageTitle } from '@/components';
import OrderItem from '@/components/OrderItem';
import {
  orderContainerStyle,
  orderAreaStyle,
  orderLeftSectionStyle,
  orderRightSectionStyle,
} from '@/template/Order';

const OrderPage = () => (
  <section style={orderContainerStyle}>
    <PageTitle>주문/결제</PageTitle>

    <div style={orderAreaStyle}>
      <section style={orderLeftSectionStyle}>
        <h3 className="order-title">주문 상품(3건)</h3>
        <hr className="divide-line-gray mt-10" />
        {Array.from({ length: 3 }, (_, index) => (
          <>
            <OrderItem key={index} type="confirm" />
            <hr className="divide-line-thin mt-10" />
          </>
        ))}
      </section>
      <section style={orderRightSectionStyle}>
        <div className="order-right-section__top">
          <h3 className="order-title">결제금액</h3>
        </div>
        <hr className="divide-line-thin" />
        <div className="order-right-section__bottom">
          <div className="flex justify-between p-20 mt-20">
            <span className="highlight-text">총 결제금액</span>
            <span className="highlight-text">21,800원</span>
          </div>
          <div className="flex-center mt-30 mx-10">
            <button className="primary-button flex-center">21,800원 결제하기</button>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default OrderPage;
