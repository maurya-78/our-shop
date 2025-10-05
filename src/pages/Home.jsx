// import React from "react";
// import "../styles/Home.css";
// import banner from "../assets/shop-banner.png"; // Banner image

// function Home() {
//   return (
//     <div className="home-page">
//       <div className="hero">
//         <img src={banner} alt="Shop Banner" />
//         <div className="hero-text">
//           <h1>Welcome to Our Paints & Hardware Shop</h1>
//           <p>Quality products, trusted brands, and great prices!</p>
//         </div>
//       </div>

//       <div className="features">
//         <div className="feature-card">
//           <h3>Quality Paints</h3>
//           <p>We offer top brands like Asian Paints, Indigo, Birla White, and more.</p>
//         </div>
//         <div className="feature-card">
//           <h3>Hardware Supplies</h3>
//           <p>Pipes, Nails, Sandpaper, Fevicol, and everything you need for construction.</p>
//         </div>
//         <div className="feature-card">
//           <h3>Expert Advice</h3>
//           <p>Our team helps you choose the right products for your projects.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import "../styles/Home.css";
import { FaCheckCircle, FaPaintBrush, FaTools, FaUserFriends } from "react-icons/fa";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Krishna Paints & Hardware</h1>
          <p>Your One Stop Solution for Paints, Hardware & More</p>
          <a href="/products" className="btn">Explore Products</a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card"><FaPaintBrush /> Paints</div>
          <div className="category-card"><FaTools /> Hardware</div>
          <div className="category-card">Tools</div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          <div className="featured-card">
           <img src="/assets/asian.png" alt="Asian Paints" />
            <h4>Asian Paints</h4>
          </div>
          <div className="featured-card">
            <img src="/assets/fevicol.png" alt="Fevicol" />
            <h4>Fevicol</h4>
          </div>
          <div className="featured-card">
            <img src="/assets/pipes.png" alt="Pipes" />
            <h4>PVC Pipes</h4>
          </div>
        </div>
        <a href="/products" className="btn">View More</a>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-card"><FaCheckCircle /> Trusted Brands</div>
          <div className="why-card"><FaCheckCircle /> Affordable Prices</div>
          <div className="why-card"><FaCheckCircle /> 24/7 Support</div>
          <div className="why-card"><FaUserFriends /> Happy Customers</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Visit Our Shop Today</h2>
        <a href="/contact" className="btn">Contact Us</a>
      </section>
    </div>
  );
}

export default Home;

