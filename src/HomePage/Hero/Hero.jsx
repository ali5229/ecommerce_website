import React from 'react'
import Avatar from '../../assets/hero/Avatar.svg'
import './Hero.css'
import Watch from '../../assets/hero/watch-image.png'
import Phone from '../../assets/hero/phone-image.png'
import Laptop from '../../assets/hero/laptop-image.png'
import Camera from '../../assets/hero/camera-image.png'
import Headphone from '../../assets/hero/headphone-image.png'

function Hero() {
  return (
    <>
    <div className="hero-dash">
        <ul>
            <li>Automobiles</li>
            <li>Clothes and wear</li>
            <li>Home interiors</li>
            <li>Computer and tech</li>
            <li>Tools, equipment</li>
            <li>Sports and outdoor</li>
            <li>Animal and pets</li>
            <li>Machinery tools</li>
            <li>More category</li>
        </ul>
        <div className='thumbnail'>
            <h2>Latest trending</h2>
            <h1>Electronic items</h1>
            <button>Learn more</button>
        </div>
        <div className='user-info'>
            <div className="user">
                <div className="details">
                    <img src={Avatar} alt="" />
                    <div>
                        <h3>Hi, User</h3>
                    <p>let's get Started</p>
                    </div>
                </div>
                <button className='join-button'>Join now</button>
                <button className="login-button">Log in</button>
            </div>
            <div className="offer">
               <p>Get US $10 off with a new supplier</p>
            </div>
            <div className="quotes">
                <p>Sent quotes with supplier preferences</p>
            </div>
        </div>
    </div>
    <div className="deals">
        <div className="deals-offer">
          <h2>Deals and offers</h2>
          <h3>Hygiene equipments</h3>
          <div className="time">
            <div>
                <h4>04</h4>
                <p>Days</p>
            </div><div>
                <h4>13</h4>
                <p>Hour</p>
            </div><div>
                <h4>04</h4>
                <p>Min</p>
            </div><div>
                <h4>56</h4>
                <p>Sec</p>
            </div>
          </div>
        </div>
        <div className="product">
            <img src={Watch} alt="" />
            <h4>Smart Watches</h4>
             <div>
                -25%
             </div>
        </div>
        <div className="product">
            <img src={Laptop} alt="" />
             <h4>Laptops</h4>
             <div>
                -25%
             </div>
        </div>
        <div className="product">
            <img src={Camera} alt="" />
             <h4>GoPro Cameras</h4>
             <div>
                -25%
             </div>
        </div>
        <div className="product">
            <img src={Headphone} alt="" />
             <h4>Headphones</h4>
             <div>
                -25%
             </div>
        </div>
        <div className="product">
            <img src={Phone} alt="" />
             <h4>Phones</h4>
             <div>
                -25%
             </div>
        </div>
    </div>
    </>
  )
}

export default Hero