import React, { useState } from 'react';

const BookingForm = ({ flight, onBook }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    passengers: flight.passengers || 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book Your Flight</h2>
      <p>Airline: {flight.airline}</p>
      <p>From: {flight.from}</p>
      <p>To: {flight.to}</p>
      <p>Departure: {flight.departureTime}</p>
      <p>Arrival: {flight.arrivalTime}</p>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Passengers
        <input
          type="number"
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          min="1"
          required
        />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
