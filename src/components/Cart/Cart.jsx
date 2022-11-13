import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import { getCart } from "../../services/cart";
import CartItems from "../../components/CartItems/CartItems.jsx";
import { clearCart } from "../../services/cart";
import style from './Cart.module.scss';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [cartItems, setCartItems] = useContext(CartContext);

  useEffect(() => {
    getCart().then((data) => setCartItems(data));
  }, [cart])

  return (
    <div className={style.Cart}>
        {
          (cartItems.length > 0) ? 
   
              cartItems.map((item) => (
              <CartItems key={item.id} item={item}/>
            ))
          : 
          <div>
            <p>You have nothing in your cart.</p>
          </div> 
        }

        {(cartItems.length > 0)? <button className={style.btn} onClick={() => clearCart()}>Clear Cart</button> : <></>}
    </div>
  );
};

export default Cart;