import React, { useState } from 'react';
import axios from 'axios';

const RealTimeAvailability = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [availability, setAvailability] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/flights/availability/${flightNumber}`);
      setAvailability(response.data);
    } catch (error) {
      console.error('Error fetching availability', error);
    }
  };

  return (
    <div>
      <h3>Real-Time Availability</h3>
      <input
        type="text"
        placeholder="Enter Flight Number"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Check Availability</button>
      {availability && (
        <div>
          <p>Seats Available: {availability.seats}</p>
          <p>Price: ${availability.price}</p>
        </div>
      )}
    </div>
  );
};

export default RealTimeAvailability;
