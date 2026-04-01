import React from "react";
import Cart from "../components/Cart";

function CartPage({ cartItems, removeFromCart }) {
  return (
    <div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default CartPage;
