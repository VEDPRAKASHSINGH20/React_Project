import React from 'react'

function GiftCards() {
  return (
    <div style={{ padding: "30px 40px", backgroundColor: "#e2e7e6", minHeight: "50vh" }}>
      <h1 style={{ fontSize: "1.6rem", marginBottom: "20px" }}>💳 Gift Cards</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {[500, 1000, 2000, 5000].map((amount) => (
          <div key={amount} style={{ width: "200px", backgroundColor: "#232f3e", color: "white", padding: "25px", borderRadius: "8px", textAlign: "center" }}>
            <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>₹{amount}</p>
            <p style={{ fontSize: "0.85rem", marginTop: "8px", color: "#ccc" }}>Amazon Gift Card</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GiftCards