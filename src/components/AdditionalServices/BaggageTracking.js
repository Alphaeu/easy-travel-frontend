import React, { useState, useEffect } from 'react';
import { getBaggageTracking } from '../../services/api';

const BaggageTracking = () => {
  const [baggage, setBaggage] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBaggage = async () => {
      try {
        const data = await getBaggageTracking('baggageID'); // Replace 'baggageID' with actual ID
        setBaggage(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchBaggage();
  }, []);

  return (
    <div>
      <h2>Baggage Tracking</h2>
      {error && <p>Error: {error.message}</p>}
      <p>Status: {baggage.status}</p>
    </div>
  );
};

export default BaggageTracking;
