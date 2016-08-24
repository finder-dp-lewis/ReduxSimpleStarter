import axios from 'axios';
const API_KEY = 'fed8ecd65b1b46352cca1caf1e214cde';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},au`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
