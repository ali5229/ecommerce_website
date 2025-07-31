import React from 'react'

import './header.css'
import logo from '../../assets/header/logo-symbol.svg'
import profile from '../../assets/header/profile.svg'
import message from '../../assets/header/message.svg'
import order from '../../assets/header/orders.svg'
import cart from '../../assets/header/cart.svg'
import Select, {components} from 'react-select'

function header() {
    const customStyles = {
     control: (provided) => ({
            ...provided,
            border: '2px solid #0D6EFD',
            borderRadius: '0px',
        }),
        option: (provided) => ({
            ...provided,
            fontWeight: '500',
        }),
};
    const customComponents ={
        IndicatorSeparator:() => null,
    }
    
    const options_cat = [
        { value: 'all', label: 'All category' },
        { value: 'cat1', label: 'Category One' },
        { value: 'cat2', label: 'Category Two' }
    ]


  return (
    <div className="container">
        <div className="title">
            <img src={logo} alt="" />
            <h1>Brand</h1>
        </div>
        <div className="searchbox">
            <input type="text" placeholder='Search' />
            <Select options={options_cat} 
                    defaultValue={options_cat[0]} 
                    components={customComponents}
                    styles={customStyles} />
            <button>Search</button>
        </div>
        <div className="actions">
            <div className="action">
                <img src={profile} alt="" />
                <p>Profile</p>
            </div>
            <div className="action">
                <img src={message} alt="" />
                <p>Message</p>
            </div>
            <div className="action">
                <img src={order} alt="" />
                <p>Orders</p>
            </div>
            <div className="action">
                <img src={cart} alt="" />
                <p>My cart</p>
            </div>
        </div>
    </div>
  )
}

export default header