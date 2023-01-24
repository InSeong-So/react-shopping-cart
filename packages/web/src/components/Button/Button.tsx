import './button.css';
//
import { Font, Palette } from '@/themes';
//
import type { FunctionComponent, ReactNode, ButtonHTMLAttributes, CSSProperties } from 'react';

type ButtonSizeType = 'small' | 'medium' | 'large';

type ButtonThemeType = 'primary' | 'secondary';

type ButtonStyleProps = {
  $size?: ButtonSizeType;
  $theme?: ButtonThemeType;
  $isBlock?: boolean;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
} & ButtonStyleProps;

const Button: FunctionComponent<ButtonProps> = ({
  $size = 'medium',
  $theme = 'primary',
  $isBlock = false,
  children,
  ...props
}) => {
  return (
    <button className="button" style={style({ $size, $theme, $isBlock })} {...props}>
      {children}
    </button>
  );
};

export default Button;

const 버튼_크기_테이블: Record<ButtonSizeType, CSSProperties> = {
  small: {
    padding: '12px 24px',

    ...Font.p2,
  },
  medium: {
    padding: '12px 24px',

    ...Font.p1,
  },
  large: {
    height: 73,
    padding: '24px 24px',

    ...Font.h4,
  },
};

const 버튼_테마_테이블: Record<ButtonThemeType, CSSProperties> = {
  primary: {
    border: 'none',

    color: Palette.White,
    backgroundColor: Palette.ShineBlue60,

    // @ts-ignore
    '--button-hover-color': Palette.White,
    // @ts-ignore
    '--button-hover-background-color': Palette.ShineBlue40,
  },
  secondary: {
    border: `1px solid ${Palette.Gray40}`,

    color: Palette.Gray90,
    backgroundColor: Palette.White,

    // @ts-ignore
    '--button-hover-color': Palette.Gray90,
    // @ts-ignore
    '--button-hover-background-color': Palette.Gray20,
  },
};

const style = ({ $size, $theme, $isBlock }: Required<ButtonStyleProps>): CSSProperties => ({
  width: $isBlock ? '100%' : 'fit-content',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  ...Font.regular,
  ...버튼_크기_테이블[$size],
  ...버튼_테마_테이블[$theme],
});
