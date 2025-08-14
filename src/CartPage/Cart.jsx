import React from 'react'
import './Cart.css'


function Cart({ cartItems, onRemoveItem, onUpdateQuantity }) {

    const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 60; // static for now
  const tax = 14; // static for now
  const total = subtotal - discount + tax;

  return (
    <div className="my-cart">
        <h2 className='heading'>My cart</h2>
        <div className="cart-checkout">
            <div className="cart-list">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="cart-item-qty">
                    <button style={{color:'red'}} onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button style={{color:'#127FFF'}} onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className="cart-item-actions">
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    className="delete-btn"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

            <div className="checkout-options">
                <div className="coupon">
                    <p>Have a coupon?</p>
                    <div className="coupon-field">
                        <input type="text" placeholder='Add coupon' />
                        <button>Apply</button>
                    </div>
                </div>
                <div className="checkout-detail">
                    <div className="amount-field">
                        <p>Subtotal:</p>
                        <p>$1403</p>
                    </div><div className="amount-field">
                        <p>Discount:</p>
                        <p style={{color:'#FA3434'}}>-$60.00</p>
                    </div><div className="amount-field">
                        <p>Tax:</p>
                        <p style={{color:'#00B517'}}>+$14.00</p>
                    </div>
                    <div className="total-amount-field">
                        <p>Total:</p>
                        <p>+$1357</p>
                    </div>
                    <button className="checkout-btn">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart