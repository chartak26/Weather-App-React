// src/services/weatherAPI.js
import axios from 'axios';

const API_KEY = '1c76db31396f78d3c36d81627bd6b2e2';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

export const getForecast = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};