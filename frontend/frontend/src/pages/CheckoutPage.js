import React from "react";
import Checkout from "../components/Checkout";

function CheckoutPage({ cartItems }) {
  return (
    <div>
      <Checkout cartItems={cartItems} />
    </div>
  );
}

export default CheckoutPage;
