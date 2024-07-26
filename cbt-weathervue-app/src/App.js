import './App.css';
import { Search, MapPin, Wind } from 'react-feather';
import { getWeather, getWeatherByCoordinates } from './api/api';
import { useState, useEffect } from 'react';
import dateFormat from 'dateformat';

function App() {
  // State variables to hold the city name and weather data
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  // useEffect hook to fetch weather data based on current location when the component mounts
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords; // Extract latitude and longitude
      const weatherData = await getWeatherByCoordinates(latitude, longitude); // Fetch weather data
      setWeather(weatherData); // Update state with fetched weather data
    });
  }, []); // Empty dependency array ensures this runs only on component mount

  // Function to fetch weather data based on the city name
  const getWeatherbyCity = async () => {
    const weatherData = await getWeather(city); // Fetch weather data for the specified city
    setWeather(weatherData); // Update state with fetched weather data
    setCity(""); // Clear the city input field
  };

  // Function to render the current date and time in a formatted string
  const renderDate = () => {
    let now = new Date(); // Get the current date and time
    return dateFormat(now, "dddd, mmmm dS, h:MM TT"); // Format date and time
  };

  return (
    <div className="app">
      <h1>WeatherVue</h1>
      <div className="input-wrapper">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city state on input change
          placeholder="Enter City Name" // Placeholder text for the input field
        />
        <button onClick={() => getWeatherbyCity()}>
          <Search /> {/* Search icon for the button */}
        </button>
      </div>

      {/* Conditionally render weather information if available */}
      {weather && weather.weather ? (
        <div className="content">
          <div className="location d-flex">
            <MapPin /> {/* Location pin icon */}
            <h2>
              {weather.name} <span>({weather.sys.country})</span>
            </h2>
          </div>
          <p className="datetext">{renderDate()}</p> {/* Display current date and time */}

          <div className="weatherdesc d-flex flex-c">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} // Weather icon
              alt="" // Empty alt text for decorative image
            />
            <h3>{weather.weather[0].description}</h3> {/* Weather description */}
          </div>

          <div className="tempstats d-flex flex-c">
            <h1>
              {weather.main.temp} <span>&deg;C</span> {/* Current temperature */}
            </h1>
            <h3>
              Feels Like {weather.main.feels_like} <span>&deg;C</span> {/* Feels like temperature */}
            </h3>
          </div>

          <div className="windstats d-flex">
            <Wind /> {/* Wind icon */}
            <h3>
              Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg; {/* Wind speed and direction */}
            </h3>
          </div>
        </div>
      ) : (
        <div className="content">
          <h4>No Data found!</h4> {/* Message when no weather data is available */}
        </div>
      )}
    </div>
  );
}

export default App;
