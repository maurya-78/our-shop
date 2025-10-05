// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">Krishna Paint & Hardware</div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/products">Products</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/gallery">Gallery</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/help">Help</Link></li>
//         <li><Link to="/signin">Sign In</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  // ✅ State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Krishna Paint & Hardware</div>

      {/* ✅ Hamburger icon for small screens */}
      <div
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      {/* ✅ Navigation Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/help" onClick={() => setIsOpen(false)}>Help</Link></li>
        <li><Link to="/signin" onClick={() => setIsOpen(false)}>Sign In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
