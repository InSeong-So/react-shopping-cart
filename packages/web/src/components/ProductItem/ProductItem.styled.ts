import { Palette, Font } from '@/themes';
//
import type { CSSProperties } from 'react';

type ProductItemElementKey =
  | 'productItemContainer'
  | 'productItemArea'
  | 'productItemInfo'
  | 'productItemInfoName'
  | 'productItemInfoPrice'
  | 'productItemInfoIconArea'
  //
  | 'productDetailItemContainer'
  | 'productDetailItemImage'
  | 'productDetailItemInfo'
  | 'productDetailItemInfoTitle'
  | 'productDetailItemInfoArea'
  | 'productDetailButton';

const styles: Record<ProductItemElementKey, CSSProperties> = {
  productItemContainer: {
    width: 300,

    display: 'flex',
    flexDirection: 'column',
  },
  productItemArea: {
    width: 'calc(100% - 20px)',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '20px 10px 10px',
  },
  productItemInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  productItemInfoName: {
    color: Palette.Gray50,
    ...Font.p2,
  },
  productItemInfoPrice: {
    color: Palette.Gray90,
    ...Font.h4,
  },
  productItemInfoIconArea: {
    cursor: 'pointer',
  },
  productDetailItemContainer: {
    width: 520,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
  },
  productDetailItemImage: {
    width: 480,
    height: 480,

    padding: 20,
  },
  productDetailItemInfo: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  productDetailItemInfoTitle: {
    width: 480,

    color: Palette.Gray90,
    ...Font.h2,
    ...Font.bold,
  },
  productDetailItemInfoArea: {
    width: 480,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    ...Font.h4,
  },
  productDetailButton: {
    width: '100%',

    marginTop: 10,
    padding: 24,
    border: 'none',
    borderRadius: 6,

    backgroundColor: Palette.Gray60,

    cursor: 'pointer',

    color: Palette.White,
    ...Font.h3,
    ...Font.semibold,
  },
};

export default styles;
