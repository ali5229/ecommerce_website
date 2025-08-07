import React from 'react'
import Hero from './Hero/Hero'
import ProductBlock from './ProductBlock/ProductBlock'

import Request from './LowerHome/Request.jsx'
import Recommend from './LowerHome/Recommend.jsx'

function HomePage() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:150}}>
      <Hero />
      <ProductBlock />
      <Request />
      <Recommend />
    </div>
  )
}

export default HomePage