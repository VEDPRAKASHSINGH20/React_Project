import React, { useState, useEffect } from 'react'

const heroImages = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400",
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1400",
]

function Hero() {
  const [currentImg, setCurrentImg] = useState(0)

  // Auto slide every 3 seconds using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ position: "relative" }}>
      <div style={{
        backgroundImage: `url('${heroImages[currentImg]}')`,
        height: "380px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
      }}>
        <div style={{
          backgroundColor: "white", height: "40px", display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: "0.85rem", width: "80%", padding: "0 10px", textAlign: "center"
        }}>
          <p>
            You are on amazon.com. You can also shop on Amazon India for millions of products.&nbsp;
            <a href="#" style={{ color: "#007185" }}>Click here to go to amazon.in</a>
          </p>
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ position: "absolute", bottom: "50px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px" }}>
        {heroImages.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentImg(i)}
            style={{
              width: "10px", height: "10px", borderRadius: "50%", cursor: "pointer",
              backgroundColor: i === currentImg ? "white" : "rgba(255,255,255,0.5)"
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero