import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ padding: "80px 40px", textAlign: "center", backgroundColor: "#e2e7e6", minHeight: "50vh" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>😕 Page not found</h1>
      <p style={{ color: "#555", marginBottom: "20px" }}>We couldn't find the page you're looking for.</p>
      <Link to="/" style={{ color: "#007185", fontWeight: "700" }}>Go back home</Link>
    </div>
  )
}

export default NotFound