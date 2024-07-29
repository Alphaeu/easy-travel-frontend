import React, { useState } from 'react';
import { searchFlights } from '../../services/api';

const AdvancedSearch = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
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
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Advanced Flight Search</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <label>
          Origin:
          <input
            type="text"
            name="origin"
            value={searchParams.origin}
            onChange={handleChange}
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={searchParams.destination}
            onChange={handleChange}
          />
        </label>
        <label>
          Departure Date:
          <input
            type="date"
            name="departureDate"
            value={searchParams.departureDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Return Date:
          <input
            type="date"
            name="returnDate"
            value={searchParams.returnDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Passengers:
          <input
            type="number"
            name="passengers"
            value={searchParams.passengers}
            onChange={handleChange}
            min="1"
          />
        </label>
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

