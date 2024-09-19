import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} PulseWave Tech. All rights reserved.
        </p>
        <p>
          <a href="mailto:info@pulsewavetech.io">info@pulsewavetech.io</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
