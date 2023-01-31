import { Palette, Font } from '@/themes';
import { ResponsiveStyledComponentProps, StyledComponentProps } from 'components';

type HeaderElementKey =
  | 'headerContainer'
  | 'headerArea'
  | 'headerTitleArea'
  | 'headerTitleLogo'
  | 'headerTitleItem'
  | 'headerNavigationMenu'
  | 'headerNavigationMenuItem';

export const dynamicStyles: ResponsiveStyledComponentProps<HeaderElementKey> = {
  headerContainer: () => ({
    width: '100%',
    position: 'fixed',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: Palette.ShineBlue60,

    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.3)',
  }),
  headerArea: () => ({
    width: 'calc(100% - 64px)',
    maxWidth: 1300,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '0 32px',
  }),
  headerTitleArea: () => ({
    minWidth: 300,
    height: 80,

    display: 'flex',
    alignItems: 'center',
  }),
  headerTitleLogo: () => ({
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  }),
  headerTitleItem: ({ isMedium }) => ({
    height: 44,

    display: 'flex',
    alignItems: 'center',

    color: Palette.White,
    textAlign: 'center',
    ...(isMedium ? Font.p1 : Font.h1),
  }),
  headerNavigationMenu: () => ({
    minWidth: 300,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,

    color: Palette.White,
  }),
  headerNavigationMenuItem: ({ isMedium }) => ({
    ...(isMedium ? Font.p4 : Font.h4),
  }),
};

export const styles: StyledComponentProps = {
  headerNavigationMenuImageArea: {
    position: 'relative',
  },
};
