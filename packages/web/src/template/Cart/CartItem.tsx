import { Checkbox } from '@/components';
import styles from './Cart.styled';

const CartItem = () => (
  <div style={styles.cartItemArea}>
    <div style={styles.carItemInfoArea}>
      <Checkbox.Base defaultChecked={true} />
      <img className="w-144 h-144" src="assets/images/product.png" alt="PET보틀-정사각(420ml)" />
      <span className="cart-name">PET보틀-정사각(420ml)</span>
    </div>
    <div className="flex-col-center justify-end gap-15">
      <img className="cart-trash-svg" src="assets/svgs/trash.svg" alt="삭제" />
      <div className="number-input-container">
        <input type="number" className="number-input" defaultValue="1" />
        <div>
          <button className="number-input-button">▲</button>
          <button className="number-input-button">▼</button>
        </div>
      </div>
      <span className="cart-price">123,456원</span>
    </div>
  </div>
);

export default CartItem;
