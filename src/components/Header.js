import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Easy Travel</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search Flights</Link>
        <Link to="/booking">Book</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/status">Flight Status</Link>
      </nav>
    </header>
  );
};

export default Header;
