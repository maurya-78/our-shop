import React from "react";
import "../styles/LogoBar.css";

function LogoBar() {
  const logos = [
    { name: "Asian Paints", src: "/assets/asian.png" },
    { name: "Indigo Paints", src: "/assets/indigo.png" },
    { name: "Birla White", src: "/assets/birla-white.png" },
    { name: "Birla Oops", src: "/assets/birla-opus.png" },
    { name: "Fevicol", src: "/assets/fevicol.png" },
  ];

  return (
    <div className="logo-bar">
      {logos.map((logo, index) => (
        <div className="logo-item" key={index}>
          <img src={logo.src} alt={logo.name} />
          <span>{logo.name}</span>
        </div>
      ))}
    </div>
  );
}

export default LogoBar;
