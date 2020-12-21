import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="navbar navbar-expand-sm">
      <button class="navbar-toggler" type="button" onClick={() => toggleNav()}>
        <i className="fas fa-align-left"></i>
      </button>
      <div
        className={
          (showNav ? "show" : "") +
          " collapse navbar-collapse justify-content-center"
        }
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              {" "}
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#resume">
              Resume
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#resume">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
