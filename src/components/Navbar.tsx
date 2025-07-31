import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Grace Travelers</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
         <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
        <li><a href="#gallery" style={{ color: '#fff', textDecoration: 'none' }}>Gallery</a></li>
        <li><Link to="/ooty">Ooty</Link></li>
        <li><Link to="/pykara">Pykara</Link></li>
        <li><Link to="/coonoor">Coonoor</Link></li>
        <li><Link to="/avalanche">Avalanche</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
