import { Font, Palette } from '@/themes';
import Divide from './Divide';
//
import type { CSSProperties } from 'react';
import type { ChildrenProps } from 'components';

const PageTitle = ({ children }: ChildrenProps) => (
  <header style={styles.titleArea}>
    <h2 style={styles.titleText}>{children}</h2>
    <Divide />
  </header>
);

const styles: Record<'titleArea' | 'titleText', CSSProperties> = {
  titleArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20,
  },
  titleText: {
    color: Palette.Gray90,
    ...Font.h3,
    ...Font.bold,
  },
};

export default PageTitle;
