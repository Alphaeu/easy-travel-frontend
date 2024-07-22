import React, { useState } from 'react';
import axios from 'axios';

const AirportTransfers = () => {
  const [transfers, setTransfers] = useState([]);
  const [location, setLocation] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/transfers', { params: { location } });
      setTransfers(response.data);
    } catch (error) {
      console.error('Error fetching transfers', error);
    }
  };

  return (
    <div>
      <h3>Airport Transfers</h3>
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search Transfers</button>
      <ul>
        {transfers.map((transfer) => (
          <li key={transfer.id}>
            {transfer.service} - ${transfer.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AirportTransfers;
