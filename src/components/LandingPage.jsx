import React from "react";
import logo from "../assets/Screenshot from 2024-12-07 16-19-14.png"
function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <div className="navbar">
      <div style={{ position: 'absolute', left: 50, top: '20px', display: 'flex', alignItems: 'center' }}>
    {/* Logo */}
    <img
      src={logo}
      alt="Rwanda Flag"
      className="logo"
      style={{ width: '50px', height: 'auto', marginRight: '10px' }} // Resize logo as needed
    />
    
    {/* Text Container */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Rwanda Air */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <i
          style={{
            color: '#005DAB',
            fontSize: '35px',
            display: 'inline-block',
            margin: '0',
            fontWeight: 'bold',
          }}
        >
          RwandAir
        </i>
        
        <div
          style={{
            color: '#005DAB',
            fontSize: '12px',
            paddingLeft: '35px',
          }}
        >
          Fly the dream of Africa
        </div>
      </div>
      
      {/* Vertical Line & HOLIDAYS */}
      <div style={{ display: 'flex', alignItems: 'center', }}>
        {/* Vertical Line */}
        <div
          style={{
            borderLeft: '2px solid #005DAB',
            height: '50px', // Adjust height as needed
            marginRight: '10px',
          }}
        ></div>
        {/* HOLIDAYS */}
        <p
          style={{
            color: '#606060',
            fontSize: '35px',
            fontWeight: 'bolder',
            textAlign: 'center',
            margin: '0',
            fontFamily:"sans-serif"
          }}
        >
          HOLIDAYS
        </p>
      </div>
    </div>
  </div>
        <div className="nav-links">
          <a href="#home">Destinations</a>
          <a href="#about">Explore Rwanda</a>
          <a href="#contact">Deals</a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
