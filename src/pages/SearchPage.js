import React, { useState } from 'react';
import FlightSearch from '../components/FlightSearch';
import FlightResults from '../components/FlightResults';

const SearchPage = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (data) => {
    // Implement flight search logic here and update results
    console.log('Searching flights with data:', data);
    setResults([
      { id: 1, airline: 'Airline A', from: 'NYC', to: 'LAX', departureTime: '10:00', arrivalTime: '13:00', price: 300 },
      // Add more mock results
    ]);
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <FlightSearch onSearch={handleSearch} />
      <FlightResults results={results} />
    </div>
  );
};

export default SearchPage;
