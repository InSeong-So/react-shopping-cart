import { Divide, OrderItem } from '@/components';
import { Fragment } from 'react';
import styles from './Order.styled';

type OrderListProps = {
  orderNo: number;
};

const OrderList = ({ orderNo }: OrderListProps) => {
  const handleClickRouteDetailPage = () => {};

  return (
    <div style={styles.orderListArea}>
      <div style={styles.orderListHeader} onClick={handleClickRouteDetailPage}>
        <span>주문번호: {orderNo}</span>
        <span>{'상세보기 >'}</span>
      </div>
      {Array.from({ length: 3 }, (_, index) => (
        <Fragment key={index}>
          <OrderItem type="add" />
          <Divide $theme="thin" $margin="0" />
        </Fragment>
      ))}
    </div>
  );
};

export default OrderList;
