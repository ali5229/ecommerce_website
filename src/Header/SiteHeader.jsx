
import React from 'react'
import Header from './header'
import Navbar from './navbar'
import './SiteHeader.css'

function SiteHeader() {
  return (
    <div className='header-container'>
      <Header />
      <Navbar />

    </div>
  )
}

export default SiteHeader