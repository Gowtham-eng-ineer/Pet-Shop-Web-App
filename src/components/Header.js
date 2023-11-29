// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/CATS" style={linkStyle}>Cats</Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>About</Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </li>
          <li>
            <Link to="/signup" style={linkStyle}>Signup</Link>
          </li>
          <li>
            <Link to="/login" style={linkStyle}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#aaa', // Fix the typo in backgroundColor
  textAlign: 'center',
  padding: '1rem',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around', // Adjusted to evenly space the links
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333', // Change link color
};

export default Header;
