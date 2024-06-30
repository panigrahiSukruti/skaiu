import React from 'react';
import { FaCog, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-left">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      {/* Add more links as needed */}
    </div>
    <div className="navbar-right">
      <Link to="/notifications"><FaBell /></Link>
      <Link to="/settings"><FaCog /></Link>
    </div>
  </div>
);

export default Navbar;
