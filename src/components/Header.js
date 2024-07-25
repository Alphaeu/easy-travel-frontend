import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Be easy and peaceful.</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/flights">Search Flights</Link>
        <Link to="/account">Account</Link>
        <Link to="/flight-status">Flight Status</Link>
        <Link to="/loyalty/frequent-flyer">Frequent Flyer</Link>
        <Link to="/services/baggage-tracking">Baggage Tracking</Link>
        <Link to="/support/live-chat">Live Chat</Link>
        <Link to="/feedback/reviews">Reviews</Link>
      </nav>
    </header>
  );
};

export default Header;

