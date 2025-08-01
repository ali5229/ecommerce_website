import React from 'react'
import './Request.css'; 
import Select from 'react-select';

function Request() {
    const quantityOptions =[
        { value: '0', label: 'Pcs' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
    ]
    const quantityStyles = {
  control: (provided) => ({
    ...provided,
    height: '40px',
    minHeight: '40px', // ensure it doesn't auto-expand
    display: 'flex',
    alignItems: 'center', // vertical centering
    padding: '0 8px', // optional horizontal spacing
    fontSize: '16px',
    fontWeight: 400,
    border: '1px solid #ccc',
    boxShadow: 'none',
  }),

  singleValue: (provided) => ({
    ...provided,
    margin: 0,            // 💥 remove extra vertical spacing
    padding: 0,
    lineHeight: '1',      // 👈 crucial to fix off-centering
    fontSize: '16px',
    fontWeight: 400,
    color: 'black',
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: 0,            // remove padding inside control
    display: 'flex',
    alignItems: 'center',  // vertically center within container
  }),

  indicatorsContainer: (provided) => ({
    ...provided,
    height: '40px',
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0 6px',
  }),

  indicatorSeparator: () => null, // remove vertical divider
};




  return (
    <div className="supplier-request">
        <div className="request-content">
            <h2>An easy way to send</h2>
            <h2>requests to all suppliers</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium adipisci molestiae.</p>
        </div>
        <div className="request-form">
            <h2>Send quote to suppliers</h2>
            <input type="text" placeholder='What item you need?' />
            <textarea name="textarea1" id="textarea1" placeholder='Type more details' cols={50} rows={4}></textarea>
            <div className='request-form-div'>
                <div className='quan'>Quantity</div>
                <Select options={quantityOptions} defaultValue={quantityOptions[0]} styles={quantityStyles}/>
            </div>
            <button>Send inquiry</button>
        </div>
    </div>
  )
}

export default Request