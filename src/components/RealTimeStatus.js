import React, { useState } from 'react';

const RealTimeStatus = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFlightNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement real-time status fetch logic here
    console.log('Fetching status for flight number:', flightNumber);
    setStatus({
      flightNumber,
      status: 'On Time',
      departureTime: '10:00 AM',
      arrivalTime: '1:00 PM',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="status-form">
        <label>
          Flight Number
          <input
            type="text"
            value={flightNumber}
            onChange={handleChange}
            placeholder="Enter Flight Number"
            required
          />
        </label>
        <button type="submit">Check Status</button>
      </form>
      {status && (
        <div className="flight-status">
          <h3>Flight Status for {status.flightNumber}</h3>
          <p><strong>Status:</strong> {status.status}</p>
          <p><strong>Departure Time:</strong> {status.departureTime}</p>
          <p><strong>Arrival Time:</strong> {status.arrivalTime}</p>
        </div>
      )}
    </div>
  );
};

export default RealTimeStatus;
