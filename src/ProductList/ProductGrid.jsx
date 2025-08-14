// src/components/ProductGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products, onAddToCart }) => {
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
              <Link 
                  to={`/ProductDetails/ProductDetails/${product.id}`} 
                  state={{ product }}
                  className="view-details-btn"
                >
                  View Details
                </Link>
              <button className="add-to-cart" onClick={() =>
                  onAddToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  })
                }>Add to Cart</button>
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