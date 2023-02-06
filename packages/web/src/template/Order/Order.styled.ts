import { Font, Palette } from '@/themes';
//
import type { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  orderContainer: {
    width: '100%',
    maxWidth: 1300,

    display: 'flex',
    flexDirection: 'column',
    gap: 38,

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
  orderPaymentTitle: {
    padding: '0 15px',

    color: Palette.Gray90,
    ...Font.regular,
    ...Font.p1,
  },
  orderPaymentArea: {
    width: '100%',

    display: 'flex',
  },
  orderLeftSection: {
    width: 'calc(60% - 30px)',

    padding: '0 15px',
  },
  orderRightSection: {
    position: 'relative',
    flex: 1,
    height: 320,

    display: 'flex',
    flexDirection: 'column',

    margin: '0 12px 0 80px',
    border: `1px solid ${Palette.Gray30}`,
  },
};

export default styles;
