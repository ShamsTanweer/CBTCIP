// Retrieve the API key from environment variables
const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * Fetches weather data for a given city.
 *
 * @param {string} city - The name of the city to retrieve weather data for.
 * @returns {Promise<object>} A promise that resolves to the weather data for the specified city.
 */
const getWeather = async (city) => {
  // Construct the API URL with the city name and API key
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
  
  // Check if the response is successful
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  // Parse the JSON data from the response
  const data = await response.json();
  return data;
};

/**
 * Fetches weather data based on latitude and longitude coordinates.
 *
 * @param {number} lat - The latitude coordinate.
 * @param {number} lon - The longitude coordinate.
 * @returns {Promise<object>} A promise that resolves to the weather data for the specified coordinates.
 */
const getWeatherByCoordinates = async (lat, lon) => {
  // Construct the API URL with latitude, longitude, and API key
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  
  // Check if the response is successful
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  // Parse the JSON data from the response
  const data = await response.json();
  return data;
};

// Export the functions for use in other parts of the application
export { getWeather, getWeatherByCoordinates };
