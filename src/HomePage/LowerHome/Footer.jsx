import React from 'react'
import './Footer.css'

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

        </div>
        <div className="footer-end">

        </div>
    </div>
  )
}

export default Footer