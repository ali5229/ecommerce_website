import React, { useState } from 'react';
import HomePage from './HomePage/HomePage'
import SiteHeader from './Header/SiteHeader'
import ProductSearch from './ProductList/ProductSearch'
import LowerHome from './HomePage/LowerHome/LowerHome.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './ProductDetails/ProductDetails.jsx'
import Cart from './CartPage/Cart.jsx'

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

    const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, product];
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity
  const handleUpdateQuantity = (id, qty) => {
    if (qty <= 0) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };


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
          <ProductSearch onAddToCart={handleAddToCart}/>
          </MainLayout>
      </>
    },
    {
      path:'/ProductDetails/ProductDetails/:productId',
      element:<>
          <MainLayout>
          <ProductDetails onAddToCart={handleAddToCart}/>
          </MainLayout>
      </>
    },{
      path:'/CartPage/Cart',
      element:<>
      <MainLayout>
         <Cart
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
            onUpdateQuantity={handleUpdateQuantity}
          />
      </MainLayout>
      </>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App