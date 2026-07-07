import React from 'react'
import products from '../data/products'
import { Link } from 'react-router-dom'

function Deals() {
  return (
    <div style={{ padding: "30px 40px", backgroundColor: "#e2e7e6", minHeight: "50vh" }}>
      <h1 style={{ fontSize: "1.6rem", marginBottom: "20px" }}>🔥 Today's Deals</h1>
      <p style={{ color: "#555", marginBottom: "25px" }}>
        Grab these limited-time offers before they're gone.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.slice(0, 4).map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            style={{ width: "22%", backgroundColor: "white", border: "1px solid #ddd", padding: "15px", textDecoration: "none", color: "inherit" }}
          >
            <img src={p.image} alt={p.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <p style={{ fontWeight: "700", marginTop: "10px" }}>{p.title}</p>
            <p style={{ color: "#B12704", fontWeight: "700" }}>₹{p.price.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Deals