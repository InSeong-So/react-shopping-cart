import { PageTitle, OrderItem } from '@/components';

const OrderListPage = () => (
  <section className="order-section">
    <PageTitle>주문 목록</PageTitle>

    <div className="order-list">
      <div className="order-list__header">
        <span>주문번호: 1</span>
        <span>{'상세보기 >'}</span>
      </div>
      {Array.from({ length: 3 }, (_, index) => (
        <>
          <OrderItem key={index} type="add" />
          <hr className="divide-line-thin mt-10" />
        </>
      ))}
    </div>
    <div className="order-list">
      <div className="order-list__header">
        <span>주문번호: 2</span>
        <span>{'상세보기 >'}</span>
      </div>
      {Array.from({ length: 2 }, (_, index) => (
        <>
          <OrderItem key={index} type="add" />
          <hr className="divide-line-thin mt-10" />
        </>
      ))}
    </div>
  </section>
);

export default OrderListPage;
