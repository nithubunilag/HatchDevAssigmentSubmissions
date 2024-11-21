import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const BASE_URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "e2270ce160d74a73b86110503241708"; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log('Search term:', searchTerm);

    if (!searchTerm) return; 

    try {
      const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${searchTerm}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setWeather(data);
      setError(null); 
    } catch (error) {
      setError(error.message);
      setWeather(null); 
    }
  };

  useEffect(() => {
    console.log('Weather data:', weather);
  }, [weather]); 

  return (
    <>
      <div>
        <img src="src/assets/weather-logo.jpg" alt="" className="logo"  />
      </div>
      <h1>Weather Forecast</h1>
      <p>You can find the weather in your country by simply typing it in!</p>
      <div className='card'>
        <form onSubmit={handleSubmit}>
          <input
            type='text' 
            placeholder='Search Country...' 
            name='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            Search
          </button>
        </form>
      </div>

      {/* Display error message if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display weather data if available */}
      {weather && (
        <div>
          <h2>{weather.location.name}</h2>
          <p>Country: {weather.location.country}</p>
          <p>Region: {weather.location.region}</p>
          <p>Latitude: {weather.location.lat}</p>
          <p>Longitude: {weather.location.lon}</p>
          <p>Local Time: {weather.location.localtime}</p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
        </div>
      )}
    </>
  );
}

export default App;
