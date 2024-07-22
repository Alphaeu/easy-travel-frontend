import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching booking history', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h3>Booking History</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.flightNumber} - {booking.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;
