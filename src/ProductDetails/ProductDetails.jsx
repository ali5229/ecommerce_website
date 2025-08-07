import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function ProductDetails() {
   const { state } = useLocation();
  const { product } = state || {};
  const navigate = useNavigate();
  if (!product) {
    return (
      <div className="error">
        <p>Product not found</p>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }
 return (
    <div className="product-details">
      <button onClick={() => navigate(-1)} className="back-button">
        &larr; Back to Products
      </button>
      
      <div className="details-container">
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image" />
          {/* Add thumbnail gallery if needed */}
        </div>
        
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          
          <div className="specs">
            {product.specs && (
              <ul>
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails