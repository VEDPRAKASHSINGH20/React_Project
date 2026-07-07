import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'

function ProductPage({ addToCart }) {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <Link to="/" style={{ color: "#007185" }}>← Back to shop</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div style={{ padding: "30px 40px", backgroundColor: "#e2e7e6" }}>
      <Link to="/" style={{ color: "#007185", fontSize: "0.9rem" }}>← Back to results</Link>

      <div style={{ display: "flex", gap: "40px", marginTop: "20px", backgroundColor: "white", padding: "30px", border: "1px solid #ddd" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "400px", height: "400px", objectFit: "cover" }}
        />

        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "1.6rem", marginBottom: "15px" }}>{product.title}</h1>
          <p style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "20px" }}>
            ₹{product.price.toLocaleString()}
          </p>
          <p style={{ color: "#555", marginBottom: "25px" }}>
            Discover great value and quality with {product.title}. Free delivery and easy returns available.
          </p>

          <button
            onClick={handleAddToCart}
            style={{
              padding: "12px 30px", border: "none", borderRadius: "4px", cursor: "pointer",
              backgroundColor: added ? "#4CAF50" : "#f08804",
              color: "white", fontWeight: "700", fontSize: "1rem",
              transition: "background-color 0.3s"
            }}
          >
            {added ? "✓ Added to Cart!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage