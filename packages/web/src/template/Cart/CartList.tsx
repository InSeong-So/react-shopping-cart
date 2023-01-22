import { Checkbox } from '@/components';
import { Fragment, useRef } from 'react';
import CartItem from './CartItem';

const CartList = () => {
  const allCheckboxRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    console.log(allCheckboxRef.current);
  };

  return (
    <section className="cart-left-section">
      <div className="flex justify-between items-center">
        <Checkbox.Container
          name="all-delete-product"
          label="선택해제"
          onChange={handleChange}
          $checkboxRef={allCheckboxRef}
        />
        <button className="delete-button">상품삭제</button>
      </div>
      <h3 className="cart-title">든든배송 상품(3개)</h3>
      <hr className="divide-line-gray mt-10" />
      {Array.from({ length: 3 }).map((_, index) => (
        <Fragment key={index}>
          <CartItem />
          <hr className="divide-line-thin mt-10" />
        </Fragment>
      ))}
    </section>
  );
};

export default CartList;
