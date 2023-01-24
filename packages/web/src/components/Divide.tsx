import { Palette } from '@/themes';
import type { CSSProperties } from 'react';

type DivideThemeType = 'normal' | 'gray' | 'thin';

type DivideProps = {
  $theme?: DivideThemeType;
};

const Divide = ({ $theme = 'normal' }: DivideProps) => <hr style={styles[$theme]} />;

const styles: Record<DivideThemeType, CSSProperties> = {
  normal: {
    width: '100%',
    height: 4,

    margin: '20px 0',
    border: 0,

    backgroundColor: Palette.Gray90,
  },
  gray: {
    width: '100%',
    height: 4,

    margin: '20px 0',
    border: 0,

    backgroundColor: Palette.Gray30,
  },
  thin: {
    width: '100%',
    height: 2,

    margin: '20px 0',
    border: 0,

    backgroundColor: Palette.Gray30,
  },
};

export default Divide;
