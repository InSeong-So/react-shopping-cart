import { useSelectAllProductFromCart, useSelectProductFromCart } from '@/queries';
import { ChangeEvent, Fragment, useState } from 'react';
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
  const { mutate: selectProductFromCart } = useSelectProductFromCart();
  const { mutate: selectAllProductFromCart } = useSelectAllProductFromCart();

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheckItem, setCheckItem] = useState<string[]>(carts.map(({ productId }) => productId));

  const handleChangeSelectAll = () => {
    selectAllProductFromCart(!isCheckAll);
    setIsCheckAll(!isCheckAll);
    if (isCheckAll) return setCheckItem([]);
    setCheckItem(carts.map((item) => item.productId));
  };

  const handleChangeSelect = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = target;
    selectProductFromCart(id);
    if (!checked) return setCheckItem(isCheckItem.filter((item) => item !== id));
    setCheckItem([...isCheckItem, id]);
  };

  return (
    <>
      <div style={styles.cartDeleteAllCheckboxArea}>
        <Checkbox.Container
          name="all-delete-product"
          label={isCheckAll ? '선택 해제' : '전체 선택'}
          onChange={handleChangeSelectAll}
          checked={isCheckAll}
        />
        <Button $size="small" $theme="secondary">
          상품 삭제
        </Button>
      </div>
      <h3 style={styles.cartListTitle}>든든배송 상품 ({carts.length}개)</h3>
      <Divide $theme="gray" />
      {carts.map((cartItem, index) => (
        <Fragment key={cartItem.productId}>
          <CartItem
            item={cartItem}
            isChecked={isCheckItem.includes(cartItem.productId)}
            handleSelect={handleChangeSelect}
          />
          {index !== carts.length && <Divide $theme="thin" />}
        </Fragment>
      ))}
    </>
  );
};

export default CartList;
