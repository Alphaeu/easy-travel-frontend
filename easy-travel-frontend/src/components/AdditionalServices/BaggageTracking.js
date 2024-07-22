import React, { useState } from 'react';
import axios from 'axios';

const BaggageTracking = () => {
  const [baggageId, setBaggageId] = useState('');
  const [baggageStatus, setBaggageStatus] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/baggage/${baggageId}`);
      setBaggageStatus(response.data);
    } catch (error) {
      console.error('Error fetching baggage status', error);
    }
  };

  return (
    <div>
      <h3>Baggage Tracking</h3>
      <input
        type="text"
        placeholder="Enter Baggage ID"
        value={baggageId}
        onChange={(e) => setBaggageId(e.target.value)}
      />
      <button onClick={handleSearch}>Track Baggage</button>
      {baggageStatus && (
        <div>
          <p>Status: {baggageStatus.status}</p>
          <p>Location: {baggageStatus.location}</p>
        </div>
      )}
    </div>
  );
};

export default BaggageTracking;
