import React from 'react';
import { Link } from 'react-router-dom';
import FlightSearch from '../components/FlightSearch';

const HomePage = () => {
  const handleSearch = (data) => {
    // Implement flight search logic here
    console.log('Searching flights with data:', data);
  };

  return (
    <div>
      <h2>Welcome to Easy Travel</h2>
      <p>Your gateway to a seamless and enjoyable travel experience.</p>
      <FlightSearch onSearch={handleSearch} />
      <Link to="/flights">Search Flights</Link>
    </div>
  );
};

export default HomePage;

