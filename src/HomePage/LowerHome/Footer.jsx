import React from 'react'
import './Footer.css'
import facebookIcon from '../../assets/lowerhome/facebook.png'
import brandLogo from '../../assets/lowerhome/logo-symbol.png'
import appleStore from '../../assets/lowerhome/Subtract.png'
import googlePlay from '../../assets/lowerhome/googleplay.png'

function Footer() {
  return (
     <div className="home-footer">
        <div className="news-letter">
            <h2>Subscribe to our newsletter</h2>
            <p>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className="subscribe">
                <input type="email" name="email" id="email" placeholder='Email' />
                <button>Subscribe</button>
            </div>
        </div>
        <div className="contact-info">
            <div className="brand-info">
                <div className="title">
                  <img src={brandLogo} alt="" />
                  <h2>Brand</h2>
                </div>
                <p>Best information about the company gier here Lorem, ipsum dolor.</p>
                <ul className="app-buttons">
                  <li><img src={facebookIcon} alt="" /></li>
                  <li><img src={facebookIcon} alt="" /></li>
                  <li><img src={facebookIcon} alt="" /></li>
                  <li><img src={facebookIcon} alt="" /></li>
                  <li><img src={facebookIcon} alt="" /></li>
                </ul>
            </div>
            <ul className="contact-list">
              <li><h2>About</h2></li>
              <li>About us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
            <ul className="contact-list">
              <li><h2>Partnerships</h2></li>
              <li>About us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
            <ul className="contact-list">
              <li><h2>Information</h2></li>
              <li>About us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
            <ul className="contact-list">
              <li><h2>About</h2></li>
              <li>About us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
            <div className="get-app">
              <h2>Get app</h2>
              <div className="download-button">
                <img src={appleStore} alt="" />
                
              </div>
              <div className="download-button">
                <img src={googlePlay} alt="" />
              </div>
            </div>
        </div>
        <div className="footer-end">
           <p>© 2023 Ecommerce. </p>
            
        </div>
    </div>
  )
}

export default Footer