import React from "react";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { PiFacebookLogoFill } from "react-icons/pi";
import { AiFillTikTok } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import screenshot from '../assets/Screenshot from 2024-12-07 15-41-03.png';
import icon from'../assets/Screenshot from 2024-12-07 15-50-03.png'

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">Rwandair Holidays</h2>
          <div className="footer-links">
            <p>Home</p>
            <p>Latest Offers</p>
            <p>Experience Rwanda</p>
            <p>Stopover Packages</p>
            <p>FAQs</p>
          </div>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Destinations</h2>
          <div className="footer-links">
            <p>Africa</p>
            <p>Europe</p>
            <p>Asia</p>
            <p>Middle East</p>
          </div>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Holidays Type</h2>
          <div className="footer-links">
            <p>Beach Holidays</p>
            <p>Honeymoon Packages</p>
            <p>Safari</p>
            <p>All-inclusive guided tours</p>
          </div>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <div className="footer-links">
            <p>
              <BsTelephoneFill />
              +250 788 177 000
            </p>
            <p>
              <PiEnvelopeSimpleLight />
              holidays@rwandair.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          <p>
            Travel made simpler.
            <br />
            Book and manage flights on the go!
          </p>
          <button className="footer-btn">
           
          <img className="playstore-icon" src="https://i.pinimg.com/736x/0d/d5/68/0dd568da2a7650b3967f0392b1afceb4.jpg"/>
      <div >
        {/* Small Text */}
        <span
          style={{
            fontSize: "10px",
            fontWeight: "100",
            display: "block",
          }}
        >
          Download from
        </span>
        {/* Bold Text */}
        <span style={{ fontSize: "16px", fontWeight: "bolder" }}>
         Google Play
        </span>
      </div>
          
          </button>

          <button className="footer-btn">
           
          <IoLogoApple style={{ fontSize: "30px", color: "white" }} />
      <div >
        {/* Small Text */}
        <span
          style={{
            fontSize: "10px",
            fontWeight: "100",
            display: "block",
          }}
        >
          Download on the
        </span>
        {/* Bold Text */}
        <span style={{ fontSize: "16px", fontWeight: "bolder" }}>
          Apple Store
        </span>
      </div>
          
          </button>
          <img
            style={{ height: "90px", marginLeft: "20px" }}
            src={screenshot}
          />
          <img
            style={{ height: "90px", marginLeft: "5px",  }}
            src={icon}
          />
          <h2 style={{ color:'#A2CEED', fontSize:'19px'}}>
            Follow Us 
          </h2>
          <div className="social-icons">
          <TiSocialLinkedinCircular  />
            <TiSocialTwitterCircular />
            <PiFacebookLogoFill />
            <AiFillTikTok />
            <SiYoutubemusic />
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
