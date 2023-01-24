import { Fragment, useRef } from 'react';
//
import { Button, Checkbox, Divide } from '@/components';
import styles from './Cart.styled';
import CartItem from './CartItem';

const CartList = () => {
  const allCheckboxRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    console.log(allCheckboxRef.current);
  };

  return (
    <>
      <div style={styles.cartDeleteAllCheckboxArea}>
        <Checkbox.Container
          name="all-delete-product"
          label="선택해제"
          onChange={handleChange}
          $checkboxRef={allCheckboxRef}
        />
        <Button $size="small" $theme="secondary">
          상품삭제
        </Button>
      </div>
      <h3 style={styles.cartListTitle}>든든배송 상품 (3개)</h3>
      <Divide $theme="gray" />
      {Array.from({ length: 3 }).map((_, index) => (
        <Fragment key={index}>
          <CartItem />
          {index !== 2 && <Divide $theme="thin" />}
        </Fragment>
      ))}
    </>
  );
};

export default CartList;