import React from 'react'
import Panel from '../components/Panel'
import Hero from '../components/Hero'
import ShopSection from '../components/ShopSection'

function Home({ searchQuery, addToCart }) {
  return (
    <>
      <Panel />
      <Hero />
      <ShopSection searchQuery={searchQuery} addToCart={addToCart} />
    </>
  )
}

export default Home