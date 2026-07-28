import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Collections from './pages/Collections/Collections'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import ShopContextProvider from './context/Shopcontext'
import ShowSearch from './common/ShowSearch'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

function AppContent() {
  const location = useLocation()

  return (
    <>
      <Navbar />

      {location.pathname === '/collections' && <ShowSearch />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
         <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/product/:productId" element={<Products />} />
   <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}

export default App