import { useAtomValue } from 'jotai';
import { cartsAtom, cartTotalPriceAtom } from '@/stores';
//
import { PageTitle } from '@/components';
import { useFetchCartList } from '@/queries';
import {
  CartList,
  CartEmpty,
  cartContainerStyle,
  cartAreaStyle,
  cartLeftSectionStyle,
  cartRightSectionStyle,
} from '@/template/Cart';
import PaymentCard from '@/template/PaymentCard';

const CartPage = () => {
  const carts = useAtomValue(cartsAtom);
  const totalPrice = useAtomValue(cartTotalPriceAtom);

  const { isLoading } = useFetchCartList();

  if (carts.length < 1) return <CartEmpty />;

  if (isLoading) return <>로딩 중</>;

  return (
    <section style={cartContainerStyle}>
      <PageTitle>장바구니</PageTitle>
      <div style={cartAreaStyle}>
        <section style={cartLeftSectionStyle}>
          <CartList carts={carts} />
        </section>
        <section style={cartRightSectionStyle}>
          <PaymentCard price={totalPrice} count={carts.length} />
        </section>
      </div>
    </section>
  );
};

export default CartPage;
