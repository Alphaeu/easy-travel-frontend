import React, { useState } from 'react';
import axios from 'axios';

const FlexibleDateSearch = () => {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    flexibleDateRange: '',
  });
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/flights/flexible', { params: searchParams });
      setResults(response.data);
    } catch (error) {
      console.error('Error searching for flights', error);
    }
  };

  return (
    <div>
      <h3>Flexible Date Search</h3>
      <form>
        <label>
          Destination:
          <input type="text" name="destination" value={searchParams.destination} onChange={handleChange} />
        </label>
        <label>
          Flexible Date Range:
          <input type="text" name="flexibleDateRange" value={searchParams.flexibleDateRange} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleSearch}>Search</button>
      </form>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.flightNumber} - {result.date} - ${result.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlexibleDateSearch;
