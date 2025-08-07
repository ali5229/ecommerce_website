import React from 'react'
import Select, {components} from 'react-select'
import './navbar.css'
import menu from '../assets/navbar/menu.svg'
import flag from '../assets/navbar/flag-icon.svg'

function navbar() {
     const customStyles = {
        control: (provided) => ({
                    ...provided,
                    border: 'none',
                }),
                option: (provided) => ({
                    ...provided,
                    fontWeight: '500',
                }),
        };
    const customComponents = {
        IndicatorSeparator: () => null
    }
    const options = [
        { value : 'english', label: 'English, USD' },
        { value : 'pakistan', label: 'Pakistan, Rupee' },
        { value : 'uae', label: 'UAE, Riyal' }
    ]
    const options2 = [
        { value: 'help', label: 'Help' },
        { value: 'contact', label: 'Contact Us' },
    ]
    const options3 = [
        { value: 'germany', label: 'Ship to Germany'},
        { value: 'england', label: 'Ship to England'},
        { value: 'america', label: 'Ship to America'},
        { value: 'pakistan', label: 'Ship to Pakistan'}
    ]


  return (
    <div className="navbar">
        <ul className="menu">
            <li><img src={menu} alt="" />All Category</li>
            <li>Hot Offers</li>
            <li>Gift Boxes</li>
            <li>Projects</li>
            <li>Menu item</li>
            <li><Select options={options2} defaultValue={options2[0]} className="select-button" components={customComponents} styles={customStyles}/></li>
        </ul>
        <Select options={options} defaultValue={options[0]} components={customComponents} styles={customStyles} />
        <Select options={options3} defaultValue={options3[0]} components={customComponents} styles={customStyles}/>
    </div>
  )
}

export default navbar