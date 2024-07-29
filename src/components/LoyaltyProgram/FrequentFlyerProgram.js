import React, { useState, useEffect } from 'react';
import { getFrequentFlyerData } from '../../services/api';

const FrequentFlyerProgram = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFrequentFlyerData();
        setData(result);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Frequent Flyer Program</h2>
      {error && <p>Error: {error.message}</p>}
      {data && <div>{/* Display frequent flyer data here */}</div>}
    </div>
  );
};

export default FrequentFlyerProgram;

