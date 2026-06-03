import React from 'react'

function Footer() {
  return (
    <footer>

      {/* Back to top */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ backgroundColor: "#222f3d", color: "white", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "0.85rem", cursor: "pointer" }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#37475a"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#222f3d"}
      >
        Back to Top
      </div>

      {/* Links */}
      <div style={{ backgroundColor: "#222f3d", color: "white", display: "flex", justifyContent: "space-evenly", padding: "40px 20px" }}>
        {[
          { heading: "Get to Know Us", links: ["About Amazon", "Careers", "Press Releases", "Amazon Science"] },
          { heading: "Connect with Us", links: ["Facebook", "Twitter", "Instagram"] },
          { heading: "Make Money with Us", links: ["Sell on Amazon", "Sell under Amazon Accelerator", "Protect and Build Your Brand", "Amazon Global Selling"] },
          { heading: "Your Account", links: ["Returns Centre", "Recalls and Product Safety Alerts", "100% Purchase Protection", "Amazon App Download", "Help"] },
        ].map((col) => (
          <ul key={col.heading} style={{ listStyle: "none", padding: 0 }}>
            <p style={{ fontWeight: "700", marginBottom: "10px" }}>{col.heading}</p>
            {col.links.map((link) => (
              <li key={link}>
                <a href="#" style={{ display: "block", fontSize: "0.85rem", color: "#dddddd", marginTop: "8px", textDecoration: "none" }}
                  onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
                  onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Logo strip */}
      <div style={{ backgroundColor: "#222f3d", borderTop: "0.5px solid #555", height: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          style={{ height: "35px", filter: "invert(1)" }}
        />
      </div>

      {/* Copyright */}
      <div style={{ backgroundColor: "#0f1111", color: "white", height: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "0.75rem", gap: "6px" }}>
        <div style={{ display: "flex", gap: "15px" }}>
          <a href="#" style={{ color: "white" }}>Conditions of Use</a>
          <a href="#" style={{ color: "white" }}>Privacy Notice</a>
          <a href="#" style={{ color: "white" }}>Your Ads Privacy Choices</a>
        </div>
        <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
      </div>

    </footer>
  )
}

export default Footer