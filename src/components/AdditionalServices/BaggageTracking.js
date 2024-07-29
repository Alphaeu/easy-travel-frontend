import React, { useState } from 'react';
import { trackBaggage } from '../../services/api';

const BaggageTracking = () => {
  const [baggageInfo, setBaggageInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleTrackBaggage = async (baggageId) => {
    try {
      const data = await trackBaggage(baggageId);
      setBaggageInfo(data);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h2>Baggage Tracking</h2>
      {/* Example button for tracking a specific baggage ID */}
      <button onClick={() => handleTrackBaggage('12345')}>Track Baggage</button>
      {error && <p>Error: {error.message}</p>}
      {baggageInfo && <div>{/* Display baggage info here */}</div>}
    </div>
  );
};

export default BaggageTracking;

