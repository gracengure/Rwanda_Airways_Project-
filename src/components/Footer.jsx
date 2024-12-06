import React from "react";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { BsTelephoneFill } from "react-icons/bs";

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
            <p><BsTelephoneFill />+250 788 177 000</p>
            <p><PiEnvelopeSimpleLight />holidays@rwandair.com</p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
