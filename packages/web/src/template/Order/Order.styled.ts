import { Palette } from '@/themes';
//
import type { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  orderContainer: {
    width: '100%',
    maxWidth: 1200,

    display: 'flex',
    flexDirection: 'column',
    gap: 80,

    padding: '24px 0',
  },
  orderListArea: {
    display: 'flex',
    flexDirection: 'column',

    border: `1px solid ${Palette.Gray60}`,
  },
  orderListHeader: {
    display: 'flex',
    justifyContent: 'space-between',

    padding: '32px 25px',
    borderBottom: `1px solid ${Palette.Gray60}`,

    backgroundColor: Palette.Gray20,

    cursor: 'pointer',
  },
  orderPaymentArea: {},
  orderLeftSection: {},
  orderRightSection: {},
};

export default styles;
