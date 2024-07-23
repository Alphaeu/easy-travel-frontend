import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Easy Travel</h2>
      <p>Your gateway to a seamless and enjoyable travel experience.</p>
      <Link to="/flights">Search Flights</Link>
    </div>
  );
};

export default Home;
