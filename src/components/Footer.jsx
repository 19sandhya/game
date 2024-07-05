import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "./Navbar";
import { FaEnvelope, FaHome, FaSearch, FaUser } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-menu">
        <li>
          <NavLink to="/" className="footer-link">
            <FaHome size={28} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="profile-circle footer-link ">
            <FaUser size={26} />
          </NavLink>
        </li>
        <li>
          <NavLink className="footer-link">
            <FaSearch size={28} />
          </NavLink>
        </li>
        <li>
          <NavLink className="footer-link">
            <FaEnvelope size={24} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
