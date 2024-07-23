import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FrequentFlyerProgram = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const response = await axios.get('/api/loyalty/rewards');
        setRewards(response.data);
      } catch (error) {
        console.error('Error fetching rewards', error);
      }
    };

    fetchRewards();
  }, []);

  return (
    <div>
      <h3>Frequent Flyer Program</h3>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.id}>
            {reward.description} - {reward.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrequentFlyerProgram;
