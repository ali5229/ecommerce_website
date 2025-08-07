// src/components/ProductList.jsx
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="description">{product.description}</p>
                <p className="price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-products">No products found matching your search.</p>
      )}
    </div>
  );
};

export default ProductList;