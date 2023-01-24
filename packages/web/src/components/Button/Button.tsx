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

const 버튼_크기_폰트_테이블: Record<ButtonSizeType, CSSProperties> = {
  small: {
    ...Font.p2,
  },
  medium: {
    ...Font.p1,
  },
  large: {
    ...Font.h4,
  },
};

const 버튼_테마_테이블: Record<ButtonThemeType, CSSProperties> = {
  primary: {
    color: Palette.White,
    backgroundColor: Palette.ShineBlue60,

    // @ts-ignore
    '--button-hover-background-color': Palette.ShineBlue40,
  },
  secondary: {
    border: `1px solid ${Palette.Gray60}`,

    color: Palette.Gray90,
    backgroundColor: Palette.White,

    // @ts-ignore
    '--button-hover-background-color': Palette.Gray20,
  },
};

const style = ({ $size, $theme, $isBlock }: Required<ButtonStyleProps>): CSSProperties => ({
  width: $isBlock ? '100%' : 'fit-content',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '12px 24px',
  ...버튼_테마_테이블[$theme],

  color: Palette.Gray90,
  ...Font.regular,
  ...버튼_크기_폰트_테이블[$size],

  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
});
