import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa"; // Import delete icon

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.product_id}>
              <span>
                {item.name} x {item.quantity} = ₹{item.price * item.quantity}
              </span>
              <FaTrashAlt 
                className="delete-icon" 
                onClick={() => removeFromCart(item.product_id)} 
              />
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{total}</h3>
      <Link to="/checkout"><button>Proceed to Checkout</button></Link>
    </div>
  );
}

export default Cart;
