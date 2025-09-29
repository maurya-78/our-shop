import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Form from "./components/Form";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Help from "./pages/Help";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";
import PhotoGallery from "./components/PhotoGallery";
import { FaBeer } from "react-icons/fa";



import "./styles/App.css"; // global styles

function App() {
  //  useEffect(() => {
  //   fetch("http://localhost:5000/")
  //     .then(res => res.text())
  //     .then(data => console.log(data))
  //     .catch(err => console.error("Error:", err));
  // }, []);
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/help" element={<Help />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<PhotoGallery />} />
          </Routes>
        </div>
        <Footer />
        {/* <Form /> */}
      </div>
    </Router>
  );
}

export default App;
