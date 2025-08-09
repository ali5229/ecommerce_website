import React, { useState } from 'react'
import './ProductDetails.css'
import { useLocation, useNavigate } from 'react-router-dom';
import flag from '../assets/product_details/arabic.png'
import verfied from '../assets/product_details/verified.png'
import worldwide from '../assets/product_details/worldwide.png'

function ProductDetails() {
   const { state } = useLocation();
  const { product } = state || {};
  const navigate = useNavigate();
  const [ buttonContext, SetbuttonContext] = useState(0);

  const productContent = [
    [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    ],
    [
      'lorem10fdfdf dksffsdf s dfs fsfs fd',
      'lorem10fdfdf dksffsdf s dfs ',
      'lorem10fdfdf dksffsdffsfs fd',
      'lorem10fdf s dfs fsfs fd',
    ],
    [
      'last of us are the best of us,',
      'last of are the best of us,',
      'last are the best of us,',
      'last he best of us,',
      'last odfgdgdff us are the best of us,',
    ]
  ]

  if (!product) {
    return (
      <div className="error">
        <p>Product not found</p>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }
 return (
    <div className="product-details-page">
      <div className="product-section">
          <div className="image-display">
            <div className="image-container">
           <img src={product.image} alt="" />
            </div>
            <div className="other-images">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="image-details">
            <h2>{product.name}</h2>
            <div className="item-prices">
              <div className="item-price">
                <h2>${product.price}</h2>
                <p>50-100 pcs</p>
              </div>
              <div className="item-price">
                <h2>${product.price}</h2>
                <p>70-700 pcs</p>
              </div>
              <div className="item-price">
                <h2>${product.price}</h2>
                <p>700 pcs</p>
              </div>
            </div>
            <div className="item-specifications">
              <div className="specification specification-underline">
                <p className="first-text">Price:</p>
                <p className="second-text">Negotiable</p>
              </div>
              <div className="specification">
                <p className="first-text">Type:</p>
                <p className="second-text">Classic Shoes</p>
              </div><div className="specification">
                <p className="first-text">Material:</p>
                <p className="second-text">Plastic material</p>
              </div><div className="specification specification-underline">
                <p className="first-text">Design:</p>
                <p className="second-text">Modern nice</p>
              </div><div className="specification">
                <p className="first-text">Customization:</p>
                <p className="second-text">Customized logo and design</p>
              </div><div className="specification">
                <p className="first-text">Protection:</p>
                <p className="second-text">Refund policy</p>
              </div><div className="specification">
                <p className="first-text">Warranty</p>
                <p className="second-text">2 years warranty</p>
              </div>
            </div>
          </div>
          <div className="supplier-details">
           <h2>Supplier Guanjoi Trading LLC</h2>
           <p><img src={flag} alt="" />Germany, Berlin</p>
           <p><img src={verfied} alt="" />Verfied Seller</p>
           <p><img src={worldwide} alt="" />Worldwide Shipping</p>
           <button className="inquiry">
            Send Inquiry
           </button>
           <button className="seller-profile">
            Seller's Profile
           </button>
          </div>

      </div>
        <div className="product-info-section">
          <div className="button-menu">
            <button onClick={()=> SetbuttonContext(0)} className={buttonContext===0 ? 'active': ''}>Description</button>
            <button onClick={() =>SetbuttonContext(1)} className={buttonContext===1 ? 'active': ''}>Review</button>
            <button onClick={() =>SetbuttonContext(2)} className={buttonContext===2 ? 'active': ''}>Shipping</button>
          </div>
          <div className="button-content">
            <ul>
              {productContent[buttonContext].map((item) =>(
                <li key={item}>{item}</li>
              ))}
            </ul>
            {buttonContext===0 && <div className='model-info'>
              <div className="model-info-section">
                <p className="info-name">Model</p>
                <p className="info-value">324234</p>
              </div>
              <div className="model-info-section">
                <p className="info-name">Style</p>
                <p className="info-value">Classic Style</p>
              </div>
              <div className="model-info-section">
                <p className="info-name">Category</p>
                <p className="info-value">Clothes</p>
              </div>
              </div>
              }
          </div>
        </div>
    </div>
  );
}

export default ProductDetails