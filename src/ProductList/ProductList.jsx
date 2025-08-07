// src/components/ProductList.jsx
import React from 'react';
import stars from '../assets/search_page/stars.png'

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <img className='product-img' src={product.image} alt={product.name} />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="price">${product.price.toFixed(2)}</p>
                <div className="specs">
                  <img src={stars} alt="" />
                  <p>7.5</p>
                  <li style={{color:'#8B96A5'}}>154 orders</li>
                  <li style={{color:'#00B517'}}>Free Shipping</li>
                </div>
                <p className="description">{product.description}</p>
                <p className="view-details">View details</p>
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