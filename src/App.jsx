import React from 'react'
import HomePage from './HomePage/HomePage'
import SiteHeader from './Header/SiteHeader'
import ProductSearch from './ProductList/ProductSearch'
import LowerHome from './HomePage/LowerHome/LowerHome.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: 
      <>
          <SiteHeader/>
          <HomePage/>
          <LowerHome />
      </>
    },
    {
      path:'/ProductList/ProductSearch',
      element:<>
          <SiteHeader/>
          <ProductSearch />
          <LowerHome />
      </>
    },
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App