import React, { useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import "./index.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div id="header">
        <div className="title-container">
          <h1> Offshore </h1>
          <h1> Studio </h1>
        </div>
        <div className="subtext-container">
          <p>
            Automated DJ booking studio based in Toronto, Ontario. Lorem ipsum
            text to fill up space.
          </p>
        </div>
        <div className="menu-container">
          <div className="dropdown">
            <button onClick={toggleDropdown}> Menu </button>
            <nav className={`drop-down-content ${isDropdownOpen ? "show" : ""}`}>
              <a className="booking-link" href="#">Booking</a>
              <Link className="faq-link" activeClass="active" to="faq-section" spy={true} smooth={true} offset={-150} duration={1000}>Faq</Link>
              <a className="login-link" href="#">Login</a>
            </nav>
          </div>
        </div>
      </div>
      <div className={`overlay ${isDropdownOpen ? "show" : ""}`} onClick={closeDropdown} />
    </>
  );
};

export default Header;