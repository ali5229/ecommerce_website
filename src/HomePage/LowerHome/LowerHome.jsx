import React from 'react'
import Request from './Request'
import Recommend from './Recommend.jsx'
import ServicesSuppliers from './Services.jsx'
import Footer from './Footer.jsx'

function LowerHome() {
  return (
    <div className='lower-home'>
      <Request />
    <Recommend />
    <ServicesSuppliers />
    <Footer />
    </div>
    
  )
}

export default LowerHome