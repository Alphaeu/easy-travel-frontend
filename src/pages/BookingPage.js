import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = ({ flight }) => {
  const handleBook = (data) => {
    // Implement booking logic here
    console.log('Booking flight with data:', data);
  };

  return (
    <div>
      <h2>Booking Page</h2>
      <BookingForm flight={flight} onBook={handleBook} />
    </div>
  );
};

export default BookingPage;
