import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar navbar-expand-sm justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            {" "}
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="resume">
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/project">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
