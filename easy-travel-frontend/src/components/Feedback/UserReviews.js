import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h3>User Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserReviews;
