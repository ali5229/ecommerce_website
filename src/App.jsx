import React from 'react'
import HomePage from './HomePage/HomePage'
import SiteHeader from './Header/SiteHeader'
import ProductSearch from './ProductList/ProductSearch'
import LowerHome from './HomePage/LowerHome/LowerHome.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './ProductDetails/ProductDetails.jsx'

const MainLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      {children}
      <LowerHome />
    </>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: 
      <>
          <MainLayout>
          <HomePage/>
          </MainLayout>
      </>
    },
    {
      path:'/ProductList/ProductSearch',
      element:<>
          <MainLayout>
          <ProductSearch />
          </MainLayout>
      </>
    },
    {
      path:'/ProductDetails/ProductDetails/:productId',
      element:<>
          <MainLayout>
          <ProductDetails/>
          </MainLayout>
      </>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App