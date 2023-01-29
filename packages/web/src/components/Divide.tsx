import { Palette } from '@/themes';
import type { CSSProperties } from 'react';

type DivideThemeType = 'normal' | 'gray' | 'thin';

type DivideProps = {
  $theme?: DivideThemeType;
  $margin?: string;
};

const Divide = ({ $theme = 'normal', $margin }: DivideProps) => (
  <hr style={styles[$theme]($margin)} />
);

const styles: Record<DivideThemeType, ($margin?: string) => CSSProperties> = {
  normal: ($margin) => ({
    width: '100%',
    height: 4,

    margin: Boolean($margin) ? $margin : '20px 0',
    border: 0,

    backgroundColor: Palette.Gray90,
  }),
  gray: ($margin) => ({
    width: '100%',
    height: 4,

    margin: Boolean($margin) ? $margin : '20px 0',
    border: 0,

    backgroundColor: Palette.Gray30,
  }),
  thin: ($margin) => ({
    width: '100%',
    height: 2,

    margin: Boolean($margin) ? $margin : '20px 0',
    border: 0,

    backgroundColor: Palette.Gray30,
  }),
};

export default Divide;
