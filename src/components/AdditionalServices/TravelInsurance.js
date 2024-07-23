import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TravelInsurance = () => {
  const [insuranceOptions, setInsuranceOptions] = useState([]);

  useEffect(() => {
    const fetchInsuranceOptions = async () => {
      try {
        const response = await axios.get('/api/insurance/options');
        setInsuranceOptions(response.data);
      } catch (error) {
        console.error('Error fetching insurance options', error);
      }
    };

    fetchInsuranceOptions();
  }, []);

  return (
    <div>
      <h3>Travel Insurance</h3>
      <ul>
        {insuranceOptions.map((option) => (
          <li key={option.id}>
            {option.name} - ${option.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelInsurance;

