import React from "react";

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <div className="navbar">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTw4BmUSrJFhYwmSzE9hyehKFekY1ZEsVYSVtIapWgPASwsmF4R"
          alt="Rwanda Flag"
          className="logo"
        />
         <div style={{ position: 'relative', display: 'inline-block' }}>
      <p style={{ color: '#005DAB', fontSize: '24px', display: 'inline-block', paddingRight: '10px', margin: '0',fontWeight:'bold'}}>
        RwandaAir
      </p>
      <span style={{
        position: 'absolute',
        top: '0',
        left: '100%',  // Position the line immediately to the right of the text
        height: '100%',
        borderLeft: '2px solid #005DAB'
      }}></span>
      <div style={{ color: '#005DAB', fontSize: '12px', width: '100%',paddingLeft:'10px' }}>
        fly the dream of Africa
      </div>
      
    </div>
    <p style={{ color:'#606060', fontSize: '24px', fontWeight:'bold'}}>HOLIDAYS</p>
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
