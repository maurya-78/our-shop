import React from "react";
import "../styles/Services.css";

function Services() {
  const services = [
    { title: "Paint Services", desc: "Get expert advice on the best paint for your houses." },
    { title: "Hardware Supplies", desc: "All types of hardware materials available." },
    { title: "Delivery Service", desc: "Fast and reliable delivery to your doorstep." },
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
