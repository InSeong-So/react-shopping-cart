import { useState, WheelEvent } from 'react';
//
import { Button, Checkbox } from '@/components';
import { TrashIcon } from '@/icons';
import styles from './Cart.styled';
//
import { cake } from 'assets';

const CartItem = () => {
  const [count, setCount] = useState(1);

  const numberWheelPrevent = (event: WheelEvent<HTMLInputElement>) => {
    const $target = event.target as HTMLInputElement;
    $target.blur();
  };

  return (
    <div style={styles.cartItemArea}>
      <div style={styles.cartItemInfoArea}>
        <Checkbox.Base defaultChecked={true} />
        <img
          style={styles.cartItemInfoImage}
          src={cake.라즈베리_쇼콜라}
          alt="PET보틀-정사각(420ml)"
        />
        <span>PET보틀-정사각(420ml)</span>
      </div>
      <div style={styles.cartItemControlArea}>
        <div style={{ cursor: 'pointer' }}>
          <TrashIcon />
        </div>
        <div style={styles.carItemControlInputContainer}>
          <input
            type="number"
            style={styles.carItemControlInput}
            onWheel={numberWheelPrevent}
            defaultValue={count}
          />
          <div style={styles.cartItemControlInputButtonArea}>
            <Button
              $theme="secondary"
              style={{ ...styles.cartItemControlInputButton, borderBottom: '1px solid black' }}
              onClick={() => setCount(() => count + 1)}
            >
              ▲
            </Button>
            <Button
              $theme="secondary"
              style={styles.cartItemControlInputButton}
              onClick={() => setCount(() => count - 1)}
            >
              ▼
            </Button>
          </div>
        </div>
        <span style={styles.cartItemControlPannel}>123,456원</span>
      </div>
    </div>
  );
};

export default CartItem;
