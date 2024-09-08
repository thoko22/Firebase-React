import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import ContactForm from "./components/ContactForm";
import HidesSection from "./components/HidesSection";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navigation Bar */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home /> {/* Home component */}
                <HidesSection /> {/* Display hides with images and prices */}
              </>
            }
          />
          <Route path="/contact" element={<ContactForm />} />{" "}
          {/* Contact Form Page */}
        </Routes>
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
}

// Navbar Component
const Navbar = () => (
  <nav className="navbar">
    <div className="logo">THOKO's</div>
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <a href="/about" onClick={(e) => e.preventDefault()}>
          About
        </a>
      </li>
    </ul>
  </nav>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Thoko's Website. All rights reserved.</p>
  </footer>
);

export default App;
