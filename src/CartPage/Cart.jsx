import React from 'react'
import './Cart.css'


function Cart() {
  return (

    <div className="my-cart">
        <h2 className='heading'>My cart</h2>
        <div className="cart-checkout">
            <div className="cart-list">

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