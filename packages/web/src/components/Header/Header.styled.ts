import { Palette, Font } from '@/themes';
//
import type { CSSProperties } from 'react';

type HeaderElementKey =
  | 'headerContainer'
  | 'headerArea'
  | 'headerTitleArea'
  | 'headerTitleLogo'
  | 'headerTitleItem'
  | 'headerNavigationMenu'
  | 'headerNavigationMenuItem';

const styles: Record<HeaderElementKey, CSSProperties> = {
  headerContainer: {
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: Palette.ShineBlue60,

    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.3)',
  },
  headerArea: {
    width: 'calc(100% - 64px)',
    maxWidth: 1300,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '0 32px',
  },
  headerTitleArea: {
    width: '100%',
    height: 80,

    display: 'flex',
    alignItems: 'center',
  },
  headerTitleLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  headerTitleItem: {
    height: 44,

    display: 'flex',
    alignItems: 'center',

    color: Palette.White,
    textAlign: 'center',
    ...Font.h1,
  },
  headerNavigationMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: 40,

    color: Palette.White,
  },
  headerNavigationMenuItem: {
    width: 90,

    ...Font.h4,
  },
};

export default styles;
