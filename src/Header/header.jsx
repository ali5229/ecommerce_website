
import React, { useState } from 'react';
import './header.css'
import logo from '../assets/header/logo-symbol.svg'
import profile from '../assets/header/profile.svg'
import message from '../assets/header/message.svg'
import order from '../assets/header/orders.svg'
import cart from '../assets/header/cart.svg'
import Select, {components} from 'react-select'
import { Link, useNavigate } from 'react-router-dom';

function header() {

        const [searchQuery, setSearchQuery] = useState('');
        const [selectedCategory, setSelectedCategory] = useState(null);
        const navigate = useNavigate();
        const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/ProductList/ProductSearch?q=${encodeURIComponent(searchQuery)}&category=${selectedCategory?.value || 'all'}`);
  };
    function moveToCart(){
        navigate('/CartPage/Cart');
  }
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
        <form className="searchbox" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder='Search' 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select 
          options={options_cat} 
          defaultValue={options_cat[0]}
          components={customComponents}
          styles={customStyles}
          onChange={setSelectedCategory}
        />
        <button type="submit">Search</button>
      </form>
      
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
            <div className="action" onClick={moveToCart}>
                <img src={cart} alt="" />
                <p>My cart</p>
            </div>
        </div>
    </div>
  )
}

export default header