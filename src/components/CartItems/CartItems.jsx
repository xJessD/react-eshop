import style from './CartItems.module.scss';
import { deleteFromCart } from "../../services/cart";
import { increaseQty, decreaseQty } from '../../services/cart';

const CartItems = ({item}) => {
  const { id, name, imageUrl, qty } = item;

  return (
    <div className={style.CartItems}>
      <div className={style.CartItems__content}>
        <img src={imageUrl} />
        <div className={style.content__info}>
            <h3>{name}</h3>
            
            <p className={style.content__info__qty}>
              <button className={style.btn} onClick={() => decreaseQty(item)}>-</button>
              <span className={style.content__info__qty_text}>Qty: {qty}</span>
              <button className={style.btn} onClick={() => increaseQty(item)}>+</button>
            </p>
            <button className={style.btn} onClick={() => (deleteFromCart(item))}>Remove from Cart </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;