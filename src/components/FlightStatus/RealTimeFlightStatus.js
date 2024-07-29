import React, { useState, useEffect } from 'react';
import { getFlightStatus } from '../../services/api';

const RealTimeFlightStatus = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const data = await getFlightStatus();
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
      {status && <div>{/* Display flight status here */}</div>}
    </div>
  );
};

export default RealTimeFlightStatus;
