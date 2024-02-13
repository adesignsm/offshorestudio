import React, { useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink} from "react-router-dom";
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
        <RouterLink to={"/"}>
          <div className="title-container">
            <h1> Offshore </h1>
            <h1> Studio </h1>
          </div>
        </RouterLink>
        <div className="subtext-container">
          <p>
          Offshore is a Toronto based DJ studio that strives to connect creativity, culture and community.
          </p>
        </div>
        <div className="menu-container">
          <div className="dropdown">
            <button onClick={toggleDropdown}> Menu </button>
            <nav className={`drop-down-content ${isDropdownOpen ? "show" : ""}`}>
              <RouterLink to={"/booking/montreal/1-hour"} onClick={toggleDropdown}> Booking </RouterLink>
              <Link className="faq-link" activeClass="active" to="faq-section" spy={true} smooth={true} offset={-150} duration={1000} onClick={toggleDropdown}>Faq</Link>
              <a className="login-link" href="https://offshore-frontend.vercel.app" onClick={toggleDropdown}>Login</a>
            </nav>
          </div>
        </div>
      </div>
      <div className={`overlay ${isDropdownOpen ? "show" : ""}`} onClick={closeDropdown} />
    </>
  );
};

export default Header;