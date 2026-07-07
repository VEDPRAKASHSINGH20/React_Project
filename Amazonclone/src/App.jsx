import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Deals from './pages/Deals'
import CustomerService from './pages/CustomerService'
import Registry from './pages/Registry'
import GiftCards from './pages/GiftCards'
import Sell from './pages/Sell'
import NotFound from './pages/NotFound'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalCount={totalCount}
        setIsCartOpen={setIsCartOpen}
      />

      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  )
}

export default App