import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Panel from './components/Panel'
import Hero from './components/Hero'
import ShopSection from './components/ShopSection'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

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
      <Panel />
      <Hero />
      <ShopSection searchQuery={searchQuery} addToCart={addToCart} />
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