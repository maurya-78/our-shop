import React, { useState } from "react";
import "../styles/Products.css";

// Images
import asianPaints from "../assets/asian.png";
import indigo from "../assets/indigo.png";
import birlaWhite from "../assets/birla-white.png";
import birlaOops from "../assets/birla-opus.png";
import fevicol from "../assets/fevicol.png";
import pipes from "../assets/pipes.png";
import nails from "../assets/nails.png";
import sandpaper from "../assets/sandpaper.png";

function Products() {
  const allProducts = [
    { name: "Asian Paints", category: "", img: asianPaints },
    { name: "Indigo Paints", category: "", img: indigo },
    { name: "Birla White Cement", category: "", img: birlaWhite },
    { name: "Birla Oop Paints", category:"", img: birlaOops },
    { name: "Fevicol", category: "", img: fevicol },
    { name: "Pipes", category: "",img: pipes },
    { name: "Nails (Khila)", category: "", img: nails },
    { name: "Sandpaper (Balu Paper)", category: "", img: sandpaper },
  ];

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Paints", "Hardware"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.category}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No products found!</p>
        )}
      </div>
    </div>
  );
}

export default Products;
