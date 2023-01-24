import './checkbox.css';
//
import { ChangeEvent, CSSProperties, forwardRef, InputHTMLAttributes, RefObject } from 'react';
import { Palette } from '@/themes';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  $checkboxRef?: RefObject<HTMLInputElement>;
};

const CheckboxBase = forwardRef<HTMLInputElement, CheckboxProps>(({ onChange, ...props }, ref) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <input
      ref={ref}
      {...props}
      className="checkbox"
      type="checkbox"
      onChange={handleOnChange}
      style={styles.checkbox}
    />
  );
});

const CheckboxContainer = ({ name, label = '', $checkboxRef, ...props }: CheckboxProps) => (
  <div style={styles.checkboxContainer}>
    <CheckboxBase name={name} {...props} ref={$checkboxRef} />
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