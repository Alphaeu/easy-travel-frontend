import React, { useState, useEffect } from 'react';
import { getRealTimeFlightStatus } from '../../services/api';

const RealTimeFlightStatus = () => {
  const [status, setStatus] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const data = await getRealTimeFlightStatus('flightID'); // Replace 'flightID' with actual ID
        setStatus(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div>
      <h2>Real-Time Flight Status</h2>
      {error && <p>Error: {error.message}</p>}
      <p>Status: {status.status}</p>
    </div>
  );
};

export default RealTimeFlightStatus;
