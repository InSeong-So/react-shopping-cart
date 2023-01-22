import { Palette, Font } from '@/themes';
//
import type { CSSProperties } from 'react';

type ProductItemElementKey =
  | 'productItemWrapper'
  | 'productItemInfo'
  | 'productItemInfoName'
  | 'productItemInfoPrice';

const styles: Record<ProductItemElementKey, CSSProperties> = {
  productItemWrapper: {
    width: 280,

    display: 'flex',
    justifyContent: 'space-between',

    padding: 5,
  },
  productItemInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  productItemInfoName: {
    ...Font.p4,
  },
  productItemInfoPrice: {},
};

export default styles;
