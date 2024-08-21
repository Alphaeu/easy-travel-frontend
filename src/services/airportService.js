// services/airportService.js
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const API_KEY = process.env.8a32beae0d9774d52f99d5728e2fa874;
const BASE_URL = 'http://api.aviationstack.com/v1';

async function getAirportInfo(airportCode) {
    try {
        const response = await axios.get(`${BASE_URL}/airports`, {
            params: {
                access_key: API_KEY,
                iata_code: airportCode
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching airport info:', error);
        throw error;
    }
}

module.exports = {
    getAirportInfo
};
