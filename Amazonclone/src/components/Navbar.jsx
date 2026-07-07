import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ searchQuery, setSearchQuery, totalCount, setIsCartOpen }) {
  return (
    <div style={{ backgroundColor: "#0f1111", color: "white", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-evenly", padding: "0 10px" }}>

      {/* Logo */}
      <Link to="/" style={{ border: "1px solid transparent", padding: "4px", cursor: "pointer", display: "flex" }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "white"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          style={{ height: "35px", filter: "invert(1)" }}
        />
      </Link>

      {/* Deliver to */}
      <div style={{ border: "1px solid transparent", padding: "4px", cursor: "pointer" }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "white"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
      >
        <p style={{ color: "#cccccc", fontSize: "0.75rem" }}>Deliver to</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>📍</span>
          <p style={{ fontWeight: "700", marginLeft: "3px" }}>India</p>
        </div>
      </div>

      {/* Search Bar - controlled input using React state */}
      <div style={{ display: "flex", backgroundColor: "rgba(255,166,0,0.9)", width: "500px", height: "40px", borderRadius: "4px" }}>
        <select style={{ backgroundColor: "#f3f3f3", width: "55px", border: "none", borderRadius: "4px 0 0 4px", textAlign: "center" }}>
          <option>All</option>
        </select>
        <input
          placeholder="Search Amazon"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "100%", fontSize: "1rem", border: "none", padding: "0 8px" }}
        />
        <div style={{ width: "45px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px", cursor: "pointer" }}>
          🔍
        </div>
      </div>

      {/* Sign In */}
      <div style={{ border: "1px solid transparent", padding: "4px", cursor: "pointer" }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "white"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
      >
        <p style={{ fontSize: "0.7rem" }}>Hello, sign in</p>
        <p style={{ fontSize: "0.85rem", fontWeight: "700" }}>Account & Lists</p>
      </div>

      {/* Returns */}
      <div style={{ border: "1px solid transparent", padding: "4px", cursor: "pointer" }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "white"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
      >
        <p style={{ fontSize: "0.7rem" }}>Returns</p>
        <p style={{ fontSize: "0.85rem", fontWeight: "700" }}>& Orders</p>
      </div>

      {/* Cart - shows live count from state */}
      <div
        onClick={() => setIsCartOpen(true)}
        style={{ border: "1px solid transparent", padding: "4px", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", position: "relative" }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "white"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
      >
        <div style={{ position: "relative" }}>
          <span style={{ fontSize: "1.6rem" }}>🛒</span>
          {totalCount > 0 && (
            <span style={{
              position: "absolute", top: "-5px", right: "-8px",
              backgroundColor: "#f08804", color: "white",
              borderRadius: "50%", width: "18px", height: "18px",
              fontSize: "0.7rem", display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: "700"
            }}>
              {totalCount}
            </span>
          )}
        </div>
        <p style={{ fontWeight: "700" }}>Cart</p>
      </div>

    </div>
  )
}

export default Navbar