import React, { useState, useEffect } from 'react';
import { getFrequentFlyerProgramDetails } from '../../services/api';

const FrequentFlyerProgram = () => {
  const [programDetails, setProgramDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgramDetails = async () => {
      try {
        const data = await getFrequentFlyerProgramDetails();
        setProgramDetails(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchProgramDetails();
  }, []);

  return (
    <div>
      <h2>Frequent Flyer Program</h2>
      {error && <p>Error: {error.message}</p>}
      <p>Program: {programDetails.name}</p>
      <p>Points: {programDetails.points}</p>
    </div>
  );
};

export default FrequentFlyerProgram;
