import { Font, Palette } from '@/themes';
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
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    padding: '40px 25px',
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
    flexDirection: 'column',
    gap: 15,

    ...Font.regular,
  },
  orderItemInfoTitle: {
    color: Palette.Gray90,
    ...Font.p1,
  },
  orderItemInfoQuantity: {
    color: Palette.Gray60,
    ...Font.p2,
  },
};

export default styles;
