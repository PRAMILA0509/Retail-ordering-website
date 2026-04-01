import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cartItems }) {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleOrder = () => {
    const orderData = {
      id: Date.now(),
      items: cartItems,
      address,
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: "PLACED"
    };

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart"); // clear cart
    navigate("/order-confirmation");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <textarea placeholder="Enter delivery address" value={address} onChange={e => setAddress(e.target.value)} />
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;
