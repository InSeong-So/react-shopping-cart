import './checkbox.css';
//
import { CSSProperties, forwardRef, InputHTMLAttributes } from 'react';
import { Palette } from '@/themes';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const CheckboxBase = forwardRef<HTMLInputElement, CheckboxProps>(({ onChange, ...props }, ref) => (
  <input
    ref={ref}
    {...props}
    className="checkbox"
    type="checkbox"
    onChange={onChange}
    style={styles.checkbox}
  />
));

const CheckboxContainer = ({ name, label = '', ...props }: CheckboxProps) => (
  <div style={styles.checkboxContainer}>
    <CheckboxBase name={name} {...props} />
    <label style={styles.checkboxLabel} htmlFor={name}>
      {label}
    </label>
  </div>
);

const Checkbox = {
  Container: CheckboxContainer,
  Base: CheckboxBase,
};

export default Checkbox;

const styles: Record<string, CSSProperties> = {
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  checkboxLabel: {
    paddingLeft: 7,
  },
  checkbox: {
    width: '1.75rem',
    height: '1.75rem',

    border: `1px solid ${Palette.ShineBlue60}`,
    borderRadius: 2,

    cursor: 'pointer',
    // @ts-ignore
    '--checkbox-checked-background-color': Palette.ShineBlue60,
  },
};
