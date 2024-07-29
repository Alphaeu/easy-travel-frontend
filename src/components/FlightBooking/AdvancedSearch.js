import React, { useState } from 'react';
import { searchFlights } from '../../services/api';

const AdvancedSearch = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    date: '',
    // Add other search parameters as needed
  });

  const handleSearch = async () => {
    try {
      const results = await searchFlights(searchParams);
      setFlights(results);
    } catch (err) {
      setError(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Advanced Flight Search</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}>
        <input
          type="text"
          name="origin"
          value={searchParams.origin}
          onChange={handleChange}
          placeholder="Origin"
          required
        />
        <input
          type="text"
          name="destination"
          value={searchParams.destination}
          onChange={handleChange}
          placeholder="Destination"
          required
        />
        <input
          type="date"
          name="date"
          value={searchParams.date}
          onChange={handleChange}
          required
        />
        {/* Add other inputs for search parameters as needed */}
        <button type="submit">Search</button>
      </form>
      {error && <p>Error: {error.message}</p>}
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>{flight.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdvancedSearch;

