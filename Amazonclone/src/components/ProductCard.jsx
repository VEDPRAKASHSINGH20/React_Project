import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false)
  const [wishlist, setWishlist] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div style={{
      border: "2px solid #ddd", width: "23%", backgroundColor: "white",
      padding: "15px", marginTop: "15px", position: "relative",
      transition: "box-shadow 0.2s"
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
    >
      {/* Wishlist button */}
      <div
        onClick={() => setWishlist(!wishlist)}
        style={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer", fontSize: "1.2rem" }}
      >
        {wishlist ? "❤️" : "🤍"}
      </div>

      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "10px", paddingRight: "25px" }}>{product.title}</h2>

        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "220px", objectFit: "cover" }}
        />
      </Link>

      <p style={{ fontWeight: "700", margin: "10px 0 6px", fontSize: "1rem" }}>₹{product.price.toLocaleString()}</p>

      <button
        onClick={handleAddToCart}
        style={{
          width: "100%", padding: "8px", border: "none", borderRadius: "4px", cursor: "pointer",
          backgroundColor: added ? "#4CAF50" : "#f08804",
          color: "white", fontWeight: "700", fontSize: "0.9rem",
          transition: "background-color 0.3s"
        }}
      >
        {added ? "✓ Added!" : "Add to Cart"}
      </button>

      <Link to={`/product/${product.id}`} style={{ color: "#007185", marginTop: "8px", fontSize: "0.9rem", cursor: "pointer", display: "block", textDecoration: "none" }}>
        See more
      </Link>
    </div>
  )
}

export default ProductCard