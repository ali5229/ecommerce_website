// src/components/ProductGrid.jsx
import React from 'react';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.length > 0 ? (
        <div className="grid-container">
          {products.map((product) => (
            <div key={product.id} className="grid-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">${product.price.toFixed(2)}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-products">No products found matching your search.</p>
      )}
    </div>
  );
};

export default ProductGrid;