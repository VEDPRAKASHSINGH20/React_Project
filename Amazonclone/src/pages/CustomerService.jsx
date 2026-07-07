import React from 'react'

function CustomerService() {
  return (
    <div style={{ padding: "30px 40px", backgroundColor: "#e2e7e6", minHeight: "50vh" }}>
      <h1 style={{ fontSize: "1.6rem", marginBottom: "20px" }}>🎧 Customer Service</h1>
      <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: "25px", maxWidth: "600px" }}>
        <p style={{ marginBottom: "12px" }}>Need help with an order, return, or your account?</p>
        <ul style={{ paddingLeft: "20px", color: "#555", lineHeight: "1.8" }}>
          <li>Track or manage your orders</li>
          <li>Start a return or replacement</li>
          <li>Update payment or delivery details</li>
          <li>Report an issue with a product</li>
        </ul>
      </div>
    </div>
  )
}

export default CustomerService