import React, { useState, useEffect } from 'react';
import { getBookingHistory } from '../../services/api';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookingHistory();
        setBookings(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Booking History</h2>
      {error && <p>Error: {error.message}</p>}
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>{booking.details}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;
