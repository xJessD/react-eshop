import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import { getCart } from "../../services/cart";
import CartItems from "../../components/CartItems/CartItems.jsx";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [cartItems, setCartItems] = useContext(CartContext);

  useEffect(() => {
    getCart().then((data) => setCartItems(data));
  }, [])

  return (
    <div>
      {
        (cartItems.length > 0) ? cartItems.map((item) => 
        <CartItems key={item.id} item={item}/>
        )
        
        : 
        <div>You have nothing in your cart</div> 
      }
         
    </div>
  );
};

export default Cart;