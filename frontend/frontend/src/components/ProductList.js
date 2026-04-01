import React, { useState, useEffect } from "react";

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Demo products (pizza, drinks, breads)
    const demoProducts = [
      { product_id: 1, name: "Margherita Pizza", description: "Classic cheese pizza", price: 299 },
      { product_id: 2, name: "Cold Drink", description: "Refreshing cola", price: 99 },
      { product_id: 3, name: "Garlic Bread", description: "Crispy garlic bread", price: 149 }
    ];
    setProducts(demoProducts);
    localStorage.setItem("products", JSON.stringify(demoProducts));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.product_id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
