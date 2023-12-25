import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import "./Navbar.css";
import NavbarBackground from "../assets/NavbarBackground.jpg"
import AvatarOne from "../assets/avatarOne.png";
const Navbar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  return (
    <header className="navbar">
      <div className="nav-container">
      {isHomePage && <img className="container" src={NavbarBackground} alt="" /> }
      <Link style={{ textDecoration: "none", color: "#2978b5" }} to={"/"}>
        <div className="left">
          <img src={Logo} alt="logo"></img>
          <span>Country Palace</span>
        </div>
      </Link>
    <div className="right">
          <img className="avatar" src={AvatarOne} alt="" />
          <span>Zumra Kucubezirci</span>
    </div>
      </div>
    </header>
  );
};

export default Navbar;
