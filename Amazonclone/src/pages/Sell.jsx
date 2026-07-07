import React from 'react'

function Sell() {
  return (
    <div style={{ padding: "30px 40px", backgroundColor: "#e2e7e6", minHeight: "50vh" }}>
      <h1 style={{ fontSize: "1.6rem", marginBottom: "20px" }}>🏪 Sell on Amazon</h1>
      <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: "25px", maxWidth: "600px" }}>
        <p style={{ color: "#555", marginBottom: "15px" }}>
          Reach millions of customers by listing your products on our marketplace.
        </p>
        <button style={{ padding: "10px 24px", backgroundColor: "#f08804", color: "white", border: "none", borderRadius: "4px", fontWeight: "700", cursor: "pointer" }}>
          Start Selling
        </button>
      </div>
    </div>
  )
}

export default Sell