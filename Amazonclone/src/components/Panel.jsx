import React, { useState } from 'react'

function Panel() {
  const [activeLink, setActiveLink] = useState("")
  const links = ["Today's Deals", "Customer Service", "Registry", "Gift Cards", "Sell"]

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
          <p
            key={link}
            onClick={() => setActiveLink(link)}
            style={{
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontWeight: activeLink === link ? "700" : "normal",
              textDecoration: activeLink === link ? "underline" : "none",
              color: activeLink === link ? "#f08804" : "white"
            }}
          >
            {link}
          </p>
        ))}
      </div>

      <div style={{ fontSize: "0.85rem", fontWeight: "700", whiteSpace: "nowrap" }}>
        Shop deals in Electronics
      </div>
    </div>
  )
}

export default Panel