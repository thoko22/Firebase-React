import React from 'react';

const Home = () => (
  <div>
    <header className="hero-section">
      <div className="hero-content">
        <h1>Welcome to THOKO</h1>
        <p>Your trusted partner in African Nguni Hides</p>
        <a href="/contact" className="cta-button" onClick={(e) => e.preventDefault()}>Get In Touch</a>
      </div>
    </header>
  </div>
);

export default Home;
