import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import { IoIosJet } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { BiSolidPlaneAlt } from "react-icons/bi";

import logo from "../assets/Screenshot from 2024-12-07 16-19-14.png";

function LandingPage() {
  const [selectedOption, setSelectedOption] = useState("To");
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered item

  const options = [
    {
      label: "Kigali International Airport",
      icon: <BiSolidPlaneAlt />,
      place: "Rwanda",
    },
    {
      label: "Berlin Brandenburg Airport",
      icon: <BiSolidPlaneAlt />,
      place: "German",
    },
    {
      label: "Frankfurt am Main Airport",
      icon: <BiSolidPlaneAlt />,
      place: "German",
    },
    { label: "Cadjehoun Airport", icon: <BiSolidPlaneAlt />, place: "Benin" },
  ];
  const toggleDropdown = () => setIsOpen(!isOpen); // Toggle dropdown visibility

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false); // Close dropdown after selecting an option
  };
  const handleMouseEnter = (index) => setHoveredIndex(index); // Set hovered index
  const handleMouseLeave = () => setHoveredIndex(null); // Clear hovered index

  return (
    <div className="landing-page">
      {/* Navbar */}
      <div className="navbar">
        <div
          style={{
            position: "absolute",
            left: 50,
            top: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Rwanda Flag"
            className="logo"
            style={{ width: "50px", height: "auto", marginRight: "10px" }} // Resize logo as needed
          />

          {/* Text Container */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Rwanda Air */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <i
                style={{
                  color: "#005DAB",
                  fontSize: "35px",
                  display: "inline-block",
                  margin: "0",
                  fontWeight: "bold",
                }}
              >
                RwandAir
              </i>

              <div
                style={{
                  color: "#005DAB",
                  fontSize: "12px",
                  paddingLeft: "35px",
                }}
              >
                Fly the dream of Africa
              </div>
            </div>

            {/* Vertical Line & HOLIDAYS */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Vertical Line */}
              <div
                style={{
                  borderLeft: "2px solid #005DAB",
                  height: "50px", // Adjust height as needed
                  marginRight: "10px",
                }}
              ></div>
              {/* HOLIDAYS */}
              <p
                style={{
                  color: "#606060",
                  fontSize: "35px",
                  fontWeight: "bolder",
                  textAlign: "center",
                  margin: "0",
                  fontFamily: "sans-serif",
                }}
              >
                HOLIDAYS
              </p>
            </div>
          </div>
        </div>
        <div className="nav-links">
          <a href="#destinations">Destinations</a>
          <a href="#explore">Explore Rwanda</a>
          <a href="#deals">Deals</a>
        </div>
        <div className="nav-useful">
          <a href="#language">
            <img
              className="united-flag"
              src="https://i.pinimg.com/736x/13/bd/6d/13bd6d5502f1ec11784b7ed4a3956c0b.jpg"
            />{" "}
            United States - EN
          </a>

          <a href="#contact">
            {" "}
            <MdPerson style={{ fontSize: "25px" }} />
            Contact us
          </a>
        </div>
      </div>
      <h1 className="hero-heading">Packages deals to top destinations</h1>
      <div className="flight-card">
        <div className="flight-links">
          <p>
            Flights + Hotel
            <IoIosJet style={{ marginLeft: "10px" }} />
            <FaBed style={{ marginLeft: "10px" }} />
          </p>
          <p>
            Flights + Cars
            <IoIosJet style={{ marginLeft: "10px" }} />
            <FaCar style={{ marginLeft: "10px" }} />
          </p>
          <p>
            Hotels <FaBed style={{ marginLeft: "10px" }} />
          </p>
        </div>
        <div
          style={{
            marginTop: "20px",
            border: "1px ,solid ,#606060",
            fontWeight: "lighter",
            width: "1400px", // Adjust height as needed
          }}
        ></div>
        <div className="flight-place">
          <div className="rectangle">
            {" "}
            <FaPlaneDeparture
              style={{ marginRight: "10px", marginTop: "10px" }}
            />
            Flying from
            <br />
            Kigali ,Rwanda
          </div>
          <div className="rectangle">
            <IoLocationOutline
              style={{ marginRight: "10px", marginTop: "10px" }}
            />
            <div className="departure">
              Flying to
              <div style={{ position: "relative", width: "250px" }}>
                {/* Dropdown Trigger */}
                <div
                  onClick={toggleDropdown}
                  style={{
                    border: "none",

                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {selectedOption}
                  <span style={{ fontSize: "16px", marginLeft: "10px" }}>
                    {isOpen ? "▲" : "▼"}
                  </span>
                </div>

                {/* Dropdown Options */}
                {isOpen && (
                  <ul
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      width: "100%",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      backgroundColor: "#fff",
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      zIndex: 1000,
                      maxHeight: "150px",
                      overflowY: "auto", // Add scroll if options exceed maxHeight
                    }}
                  >
                    {options.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        onMouseEnter={() => handleMouseEnter(index)} // Update hovered index
                        onMouseLeave={handleMouseLeave} // Clear hovered index
                        style={{
                          padding: "10px",
                          cursor: "pointer",

                          display: "flex",
                          flexDirection: "column", // Stack elements vertically
                          alignItems: "flex-start",
                          backgroundColor:
                            hoveredIndex === index ? "#005DAB" : "transparent", // Blue background if hovered
                          color: hoveredIndex === index ? "#fff" : "#000", // White text if hovered
                          transition: "background-color 0.2s ease", // Smooth transition
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {option.icon}
                          <span style={{ marginLeft: "10px" }}>
                            {option.label}
                          </span>
                        </div>

                        <span
                          style={{
                            fontSize: "12px",
                            color: "#666",
                            marginTop: "5px",
                            marginLeft: "27px",
                          }}
                        >
                          {option.place}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="rectangle">
            <IoCalendarOutline
              style={{ marginRight: "10px", marginTop: "10px" }}
            />
            <div className="departing">
              Departing:
              <input
                type="date"
                value="2024-02-28"
                style={{
                  width: "120px",
                  marginTop: "5px",
                }}
              />
            </div>
            <IoCalendarOutline
              style={{ marginRight: "10px", marginTop: "10px" }}
            />
            <div className="returning">
              Returning:
              <input
                type="date"
                style={{ width: "120px", marginTop: "5px" }}
                value="2024-02-28"
              />
            </div>
          </div>
          <div className="rectangle">
            <MdPerson style={{ marginRight: "10px", marginTop: "10px" }} />
            <div className="traveling">
              {" "}
              Traveler(s)
              <select
                style={{
                  border: "none",
                  width: "200px",
                  backgroundColor: "white",
                  marginTop: "5px",
                  fontWeight: "bolder",
                  fontSize: "15px",
                }}
              >
                <option>1 Room, 2 Persons</option>
                <option>2 Room, 3 Persons</option>
                <option>3 Room, 5 Persons </option>
              </select>
            </div>
          </div>
          <div className="rectangle">
            <div className="cabin">
              Cabin class
              <select
                style={{
                  border: "none",
                  width: "180px",
                  backgroundColor: "white",
                  marginTop: "5px",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                <option>Economy</option>
                <option>Business class</option>
                <option>First class</option>
              </select>
            </div>
          </div>
         
        </div>
        <button style={{marginTop:'120px' ,marginLeft:"15px",width:"200px" ,height:'50px' ,backgroundColor:'white',fontSize:'20px', color:'#00509E', border:'none', padding:'5px'}}> + Add promo code</button>

        <button style={{marginTop:'120px' ,float:'right', marginRight:'35px' ,width:"200px" ,height:'50px' ,backgroundColor:'#00509E',fontSize:'15px', color:'white', border:'1px solid white', borderRadius:'5px',padding:'5px'}}>Search Packages</button>
      </div>
     
    </div>
  );
}

export default LandingPage;
