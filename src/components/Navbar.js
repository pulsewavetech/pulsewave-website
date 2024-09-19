import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo">
          PulseWave Tech
        </a>
        <ul className="navbar-menu">
          <li>
            <a href="#home">Home</a> {/* Link to Hero section */}
          </li>
          <li>
            <a href="#mission">Our Mission</a> {/* Link to MissionStatement */}
          </li>
          <li>
            <a href="#contact">Contact Us</a> {/* Link to ContactUs */}
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
