import { PageTitle } from '@/components';
import { orderContainerStyle, OrderList } from '@/template/Order';

const OrderListPage = () => (
  <section style={orderContainerStyle}>
    <PageTitle>주문 목록</PageTitle>
    {Array.from({ length: 2 }).map((_, index) => (
      <OrderList key={index} orderNo={index} />
    ))}
  </section>
);

export default OrderListPage;
