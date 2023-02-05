import { useDeleteProductFromCart, useUpdateQuantityFromCart } from '@/queries';
import { useState, WheelEvent } from 'react';
//
import { Button, Checkbox } from '@/components';
import { TrashIcon } from '@/icons';
import styles from './Cart.styled';
//
import type { ProductType } from 'global-types';

type CartItemProps = {
  item: ProductType;
};

const numberWheelPrevent = (event: WheelEvent<HTMLInputElement>) => {
  const $target = event.target as HTMLInputElement;
  $target.blur();
};

const CartItem = ({ item }: CartItemProps) => {
  const { mutate } = useUpdateQuantityFromCart();
  const { mutate: deleteProductFromCart } = useDeleteProductFromCart();
  const [count, setCount] = useState(item.quantity);

  const handleClickCountControl = (type: 'add' | 'sub') => {
    const updatedCount = type === 'add' ? count + 1 : count - 1;
    if (updatedCount <= 0 || updatedCount > 20) return;

    setCount(updatedCount);

    mutate({ ...item, quantity: updatedCount });
  };

  const handleClickRemoveItem = () => {
    deleteProductFromCart(item.productId);
  };

  return (
    <div style={styles.cartItemArea}>
      <div style={styles.cartItemInfoArea}>
        <Checkbox.Base defaultChecked={item.isChecked} />
        <img style={styles.cartItemInfoImage} src={item.src} alt={item.title} />
        <span>{item.title}</span>
      </div>
      <div style={styles.cartItemControlArea}>
        <div style={{ cursor: 'pointer' }} onClick={handleClickRemoveItem}>
          <TrashIcon />
        </div>
        <div style={styles.carItemControlInputContainer}>
          <input
            type="number"
            style={styles.carItemControlInput}
            onWheel={numberWheelPrevent}
            value={count}
            onChange={() => undefined}
          />
          <div style={styles.cartItemControlInputButtonArea}>
            <Button
              $theme="secondary"
              style={{ ...styles.cartItemControlInputButton, borderBottom: '1px solid black' }}
              onClick={() => handleClickCountControl('add')}
            >
              ▲
            </Button>
            <Button
              $theme="secondary"
              style={styles.cartItemControlInputButton}
              onClick={() => handleClickCountControl('sub')}
            >
              ▼
            </Button>
          </div>
        </div>
        <span style={styles.cartItemControlPanel}>{item.price}원</span>
      </div>
    </div>
  );
};

export default CartItem;
