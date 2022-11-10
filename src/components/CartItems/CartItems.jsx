import { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { getCoffeeByID } from "../../services/coffee";

const CartItems = ({item}) => {
  const { id, name } = item;

  return (
    <div>
      <h4>{name}</h4>
      <h3>Hello</h3>
    </div>
  );
};

export default CartItems;