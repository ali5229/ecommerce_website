import React from 'react'
import Header from '../src/HomePage/Header/header'
import Navbar from '../src/HomePage/Navbar/navbar'
import Hero from '../src/HomePage/Hero/Hero'
import ProductBlock from '../src/HomePage/ProductBlock/ProductBlock'
import LowerHome from './HomePage/LowerHome/LowerHome'

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header/>
      <Navbar />
      <Hero />
      <ProductBlock />
      <LowerHome />
    </div>
  )
}

export default App