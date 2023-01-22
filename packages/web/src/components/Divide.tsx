import { Palette } from '@/themes';
import type { CSSProperties } from 'react';

type DivideKey = 'normal' | 'gray' | 'thin';

type DivideProps = {
  type?: DivideKey;
};

const Divide = ({ type = 'normal' }: DivideProps) => <hr style={styles[type]} />;

const styles: Record<DivideKey, CSSProperties> = {
  normal: {
    width: '100%',

    margin: '20px 0',
    border: `2px solid ${Palette.Gray90}`,
  },
  gray: {
    width: '100%',

    margin: '20px 0',
    border: `2px solid ${Palette.Gray30}`,
  },
  thin: {
    width: '100%',

    margin: '20px 0',
    border: `1px solid ${Palette.Gray30}`,
  },
};

export default Divide;
