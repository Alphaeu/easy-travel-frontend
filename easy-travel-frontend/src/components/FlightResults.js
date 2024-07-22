import React from 'react';

const FlightResults = ({ results }) => {
  return (
    <div>
      {results.map((flight) => (
        <div key={flight.id} className="flight-result">
          <h2>{flight.airline}</h2>
          <p>From: {flight.from}</p>
          <p>To: {flight.to}</p>
          <p>Departure: {flight.departureTime}</p>
          <p>Arrival: {flight.arrivalTime}</p>
          <p>Price: ${flight.price}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default FlightResults;
