import React, { useState } from 'react';
import axios from 'axios';

const RealTimeFlightStatus = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [status, setStatus] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/flights/status/${flightNumber}`);
      setStatus(response.data);
    } catch (error) {
      console.error('Error fetching flight status', error);
    }
  };

  return (
    <div>
      <h3>Real-Time Flight Status</h3>
      <input
        type="text"
        placeholder="Enter Flight Number"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Check Status</button>
      {status && (
        <div>
          <p>Status: {status.status}</p>
          <p>Estimated Arrival: {status.estimatedArrival}</p>
        </div>
      )}
    </div>
  );
};

export default RealTimeFlightStatus;
