import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PromotionsOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get('/api/promotions');
        setOffers(response.data);
      } catch (error) {
        console.error('Error fetching offers', error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div>
      <h3>Promotions and Offers</h3>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>
            {offer.description} - {offer.discount}% off
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromotionsOffers;
