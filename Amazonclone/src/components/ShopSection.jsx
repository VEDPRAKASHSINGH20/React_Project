import React from 'react'
import ProductCard from './ProductCard'
import products from '../data/products'

function ShopSection({ searchQuery, addToCart }) {

  // Filter products based on search — React filtering in action
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div style={{ backgroundColor: "#e2e7e6", padding: "0 20px 30px" }}>
      {searchQuery && (
        <p style={{ padding: "15px 0", fontSize: "0.95rem", color: "#333" }}>
          Showing results for <strong>"{searchQuery}"</strong> — {filtered.length} found
        </p>
      )}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px", fontSize: "1.1rem", color: "#555" }}>
          😕 No products found for "<strong>{searchQuery}</strong>"
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ShopSection