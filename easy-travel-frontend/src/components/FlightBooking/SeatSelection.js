import React, { useState } from 'react';
import axios from 'axios';

const SeatSelection = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleFetchSeats = async () => {
    try {
      const response = await axios.get(`/api/flights/seats/${flightNumber}`);
      setSeats(response.data);
    } catch (error) {
      console.error('Error fetching seats', error);
    }
  };

  const handleSelectSeat = async () => {
    try {
      await axios.post(`/api/flights/seats/select`, { flightNumber, seat: selectedSeat });
      alert('Seat selected successfully');
    } catch (error) {
      console.error('Error selecting seat', error);
    }
  };

  return (
    <div>
      <h3>Seat Selection</h3>
      <input
        type="text"
        placeholder="Enter Flight Number"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
      />
      <button onClick={handleFetchSeats}>Fetch Seats</button>
      {seats.length > 0 && (
        <div>
          <ul>
            {seats.map((seat) => (
              <li key={seat}>
                <input
                  type="radio"
                  name="seat"
                  value={seat}
                  onChange={(e) => setSelectedSeat(e.target.value)}
                />
                {seat}
              </li>
            ))}
          </ul>
          <button onClick={handleSelectSeat}>Select Seat</button>
        </div>
      )}
    </div>
  );
};

export default SeatSelection;
