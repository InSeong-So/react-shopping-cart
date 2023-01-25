import { CSSProperties } from 'react';

type OrderItemElementKey =
  | 'orderItemContainer'
  | 'orderItemArea'
  | 'orderItemImage'
  | 'orderItemInfo'
  | 'orderItemInfoTitle'
  | 'orderItemInfoQuantity';

const styles: Record<OrderItemElementKey, CSSProperties> = {
  orderItemContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  orderItemArea: {
    display: 'flex',
    gap: 15,

    marginTop: 10,
  },
  orderItemImage: {
    width: 144,
    height: 144,
  },
  orderItemInfo: {
    display: 'flex',
    gap: 15,
  },
  orderItemInfoTitle: {},
  orderItemInfoQuantity: {},
};

export default styles;
