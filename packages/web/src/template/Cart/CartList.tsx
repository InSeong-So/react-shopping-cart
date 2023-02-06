import { Fragment, useRef, useState } from 'react';
//
import { Button, Checkbox, Divide } from '@/components';
import styles from './Cart.styled';
import CartItem from './CartItem';
//
import type { ProductType } from 'global-types';

type CartListProps = {
  carts: ProductType[];
};

const CartList = ({ carts }: CartListProps) => {
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const [allChecked, setAllChecked] = useState(false);

  const handleChange = () => {
    setAllChecked(!allChecked);

    for (let i = 0; i < refs.current.length; i++) {
      refs.current[i].checked = !allChecked;
    }
  };

  return (
    <>
      <div style={styles.cartDeleteAllCheckboxArea}>
        <Checkbox.Container
          name="all-delete-product"
          label="선택해제"
          onChange={handleChange}
          checked={allChecked}
        />
        <Button $size="small" $theme="secondary">
          상품삭제
        </Button>
      </div>
      <h3 style={styles.cartListTitle}>든든배송 상품 (3개)</h3>
      <Divide $theme="gray" />
      {carts.map((cartItem, index) => (
        <Fragment key={cartItem.productId}>
          <CartItem item={cartItem} ref={(element) => (refs.current[index] = element)} />
          {index !== carts.length && <Divide $theme="thin" />}
        </Fragment>
      ))}
    </>
  );
};

export default CartList;
