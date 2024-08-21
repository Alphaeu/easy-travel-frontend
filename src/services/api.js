// services/api.js
const BASE_URL = 'https://wanderwings-1721685937-14a5fb6a89c4.heroku app.com/api';

// Utility function for making API requests
const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Search for flights based on search parameters
export const searchFlights = async (searchParams) => {
  const queryString = new URLSearchParams(searchParams).toString();
  return await fetchData(`flights/search?${queryString}`);
};

// Get booking history for the current user
export const getBookingHistory = async () => {
  return await fetchData('account/booking-history');
};

// Track baggage using a tracking number
export const trackBaggage = async (trackingNumber) => {
  return await fetchData(`services/baggage-tracking/${trackingNumber}`);
};

// Authenticate user and handle login
export const loginUser = async (credentials) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  };
  return await fetchData('auth/login', options);
};

// Get real-time flight status
export const getFlightStatus = async () => {
  return await fetchData('flight-status');
};

// Get frequent flyer program details
export const getFrequentFlyerData = async () => {
  return await fetchData('loyalty/frequent-flyer');
};

// Get promotions and offers for the loyalty program
export const getPromotionsOffers = async () => {
  return await fetchData('loyalty/promotions');
};

// Get additional services like travel insurance, airport transfers, etc.
export const getAdditionalServices = async (serviceType) => {
  return await fetchData(`services/${serviceType}`);
};

// Submit user feedback
export const submitFeedback = async (feedback) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(feedback),
  };
  return await fetchData('feedback/submit', options);
};

// User registration
export const registerUser = async (userDetails) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userDetails),
  };
  return await fetchData('auth/register', options);
};

// Password recovery
export const recoverPassword = async (email) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  };
  return await fetchData('auth/password-recovery', options);
};

// Search for flights based on flexible dates
export const searchFlightsFlexibleDates = async (searchParams) => {
  const queryString = new URLSearchParams(searchParams).toString();
  return await fetchData(`flights/search/flexible?${queryString}`);
};

// Get notifications for the current user
export const getNotifications = async () => {
  return await fetchData('account/notifications');
};

// Get trending destinations
export const getTrendingDestinations = async () => {
  return await fetchData('destinations/trending');
};
