import axios from 'axios';

const API_URL = 'http://localhost:5000/api/flights'; // Update with your backend URL

const searchFlights = async (searchParams) => {
  const response = await axios.get(API_URL, { params: searchParams });
  return response.data;
};

const getFlightStatus = async (flightId) => {
  const response = await axios.get(`${API_URL}/status/${flightId}`);
  return response.data;
};

export default {
  searchFlights,
  getFlightStatus,
};
