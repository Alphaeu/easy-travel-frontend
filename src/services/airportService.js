// services/airportService.js
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

// Define API keys and base URLs for different services
const AVIATIONSTACK_API_KEY = process.env.AVIATIONSTACK_API_KEY;
const AVIATIONSTACK_BASE_URL = 'http://api.aviationstack.com/v1';

const CURRENCYLAYER_API_KEY = process.env.CURRENCYLAYER_API_KEY;
const CURRENCYLAYER_BASE_URL = 'http://api.currencylayer.com';

// Function to get airport information
async function getAirportInfo(airportCode) {
    try {
        const response = await axios.get(`${AVIATIONSTACK_BASE_URL}/airports`, {
            params: {
                access_key: AVIATIONSTACK_API_KEY,
                iata_code: airportCode
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching airport info:', error);
        throw error;
    }
}

// Function to get currency exchange rates
async function getCurrencyExchangeRates(baseCurrency) {
    try {
        const response = await axios.get(`${CURRENCYLAYER_BASE_URL}/live`, {
            params: {
                access_key: CURRENCYLAYER_API_KEY,
                base: baseCurrency
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching currency exchange rates:', error);
        throw error;
    }
}

module.exports = {
    getAirportInfo,
    getCurrencyExchangeRates
};


