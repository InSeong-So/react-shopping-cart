import { Font, Palette } from '@/themes';
//
import type { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  cartContainer: {
    width: '100%',
    maxWidth: 1200,

    padding: '24px 0',
  },
  cartArea: {
    width: '100%',

    display: 'flex',
  },
  cartLeftSection: {
    width: 'calc(60% - 30px)',

    padding: '0 15px',
  },
  cartRightSection: {
    position: 'relative',
    flex: 1,
    height: 320,

    display: 'flex',
    flexDirection: 'column',

    margin: '80px 12px 0 80px',
    border: `1px solid ${Palette.Gray30}`,
  },
  cartItemArea: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartItemInfoArea: {
    display: 'flex',
    gap: 15,

    marginTop: 10,

    color: Palette.Gray90,
    ...Font.p1,
    ...Font.regular,
  },
  cartItemInfoImage: {
    width: 144,
    height: 144,
  },
  cartItemControlArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 15,
  },
  carItemControlInputContainer: {
    height: 58,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: Palette.Gray60,
  },
  carItemControlInput: {
    width: 72,
    height: 58,

    border: `1px solid ${Palette.Gray30}`,

    color: Palette.Gray60,
    ...Font.h4,
    textAlign: 'center',
  },
  cartItemControlInputButtonArea: {
    height: 58,

    display: 'flex',
    flexDirection: 'column',
  },
  cartItemControlInputButton: {
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '4px 12px',
    border: `1px solid ${Palette.Gray30}`,

    color: Palette.Gray60,

    cursor: 'pointer',
  },
  cartItemControlPannel: {
    alignSelf: 'flex-end',

    color: Palette.Gray60,
    ...Font.p2,
    ...Font.regular,
  },
  cartDeleteAllCheckboxArea: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '25px 0 50px',
  },
  cartListTitle: {
    color: Palette.Gray90,
    ...Font.regular,
    ...Font.p1,
  },
};

export default styles;
