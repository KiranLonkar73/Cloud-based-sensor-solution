const BASE_URL = "http://127.0.0.1:5000";

export const fetchLatestWeather = async () => {
  const response = await fetch(`${BASE_URL}/weather/latest`);
  return response.json();
};

export const fetchWeatherHistory = async () => {
  const response = await fetch(`${BASE_URL}/weather/history`);
  return response.json();
};