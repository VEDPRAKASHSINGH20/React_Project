import React from 'react'

function CartDrawer({ isOpen, cartItems, removeFromCart, onClose }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: 99 }}
        />
      )}

      {/* Drawer */}
      <div style={{
        position: "fixed", top: 0, right: 0, height: "100%", width: "350px",
        backgroundColor: "white", zIndex: 100, padding: "20px",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease",
        overflowY: "auto", boxShadow: "-4px 0 15px rgba(0,0,0,0.2)"
      }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "700" }}>🛒 Your Cart</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: "1.4rem", cursor: "pointer" }}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: "60px", color: "#888" }}>
            <p style={{ fontSize: "3rem" }}>🛒</p>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} style={{ display: "flex", gap: "12px", marginBottom: "16px", borderBottom: "1px solid #eee", paddingBottom: "16px" }}>
                <img src={item.image} alt={item.title} style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "4px" }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: "600", fontSize: "0.9rem" }}>{item.title}</p>
                  <p style={{ color: "#888", fontSize: "0.8rem" }}>Qty: {item.qty}</p>
                  <p style={{ fontWeight: "700", color: "#0f1111" }}>₹{(item.price * item.qty).toLocaleString()}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#c0392b", fontSize: "1.1rem", alignSelf: "flex-start" }}
                >
                  🗑
                </button>
              </div>
            ))}

            <div style={{ borderTop: "2px solid #eee", paddingTop: "16px", marginTop: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "700", fontSize: "1.1rem", marginBottom: "16px" }}>
                <span>Total:</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <button style={{
                width: "100%", padding: "12px", backgroundColor: "#f08804",
                color: "white", border: "none", borderRadius: "4px",
                fontWeight: "700", fontSize: "1rem", cursor: "pointer"
              }}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartDrawer