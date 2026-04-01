import React from "react";
import ProductList from "../components/ProductList";

function Products({ addToCart }) {
  return (
    <div>
      <h2>Available Products</h2>
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default Products;
