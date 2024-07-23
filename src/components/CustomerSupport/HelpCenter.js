import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelpCenter = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('/api/help/faqs');
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching FAQs', error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div>
      <h3>Help Center</h3>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpCenter;
