import React from "react";
import navLogo from "../images/nav-logo.png";

function Navbar() {
  return (
    <nav className="navbar-container">
      <img src={navLogo} alt="travel logo" className="nav-logo" />
      <h2 className="nav-header">my travel journal.</h2>
    </nav>
  );
}

export default Navbar;