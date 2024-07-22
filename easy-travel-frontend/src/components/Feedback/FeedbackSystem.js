import React, { useState } from 'react';
import axios from 'axios';

const FeedbackSystem = () => {
  const [feedback, setFeedback] = useState({
    comment: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/feedback', feedback);
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error('Error submitting feedback', error);
    }
  };

  return (
    <div>
      <h3>Submit Feedback</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <textarea name="comment" value={feedback.comment} onChange={handleChange}></textarea>
        </label>
        <label>
          Rating:
          <select name="rating" value={feedback.rating} onChange={handleChange}>
            <option value="0">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackSystem;
