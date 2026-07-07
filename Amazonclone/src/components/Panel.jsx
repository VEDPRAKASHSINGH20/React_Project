import React from 'react'
import { NavLink } from 'react-router-dom'

function Panel() {
  const links = [
    { name: "Today's Deals", path: "/deals" },
    { name: "Customer Service", path: "/customer-service" },
    { name: "Registry", path: "/registry" },
    { name: "Gift Cards", path: "/gift-cards" },
    { name: "Sell", path: "/sell" },
  ]

  return (
    <div style={{ backgroundColor: "#222f3d", color: "white", height: "40px", display: "flex", alignItems: "center", padding: "0 10px", gap: "20px" }}>

      <div style={{ display: "flex", alignItems: "center", gap: "5px", border: "1px solid transparent", padding: "4px 8px", cursor: "pointer", whiteSpace: "nowrap" }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "white"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
      >
        ☰ All
      </div>

      <div style={{ display: "flex", gap: "15px", fontSize: "0.85rem", flexGrow: 1 }}>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            style={({ isActive }) => ({
              cursor: "pointer",
              whiteSpace: "nowrap",
              textDecoration: isActive ? "underline" : "none",
              fontWeight: isActive ? "700" : "normal",
              color: isActive ? "#f08804" : "white",
            })}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div style={{ fontSize: "0.85rem", fontWeight: "700", whiteSpace: "nowrap" }}>
        Shop deals in Electronics
      </div>
    </div>
  )
}

export default Panel