
import React, { useState } from 'react';
import './App.css'
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import SearchBar from './components/searchbar';
import axios from 'axios'

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null)

  const fetchWeather = async(city) => {
const API_KEY = 'cb1c962bcfe4b4a935f6e7bb30f0ca6d'
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;


  
try {
  // Fetch current weather data
  const weatherResponse = await axios.get(weatherUrl);
  const weatherData = weatherResponse.data;

  // Fetch forecast data
  const forecastResponse = await axios.get(forecastUrl);
  const forecastData = forecastResponse.data;

  // Set the weather state
  setWeather({
    city: weatherData.name,
    description: weatherData.weather[0].description,
    temperature: weatherData.main.temp,
    humidity: weatherData.main.humidity,
    windSpeed: weatherData.wind.speed,
  });

  // Process forecast data for 5-day forecast (filtered to get one forecast per day)
  const dailyForecasts = forecastData.list.filter((reading) =>
    reading.dt_txt.includes('12:00:00')
  );

  setForecast(
    dailyForecasts.map((reading) => ({
      date: new Date(reading.dt * 1000).toLocaleDateString(),
      description: reading.weather[0].description,
      temperature: reading.main.temp,
    }))
  );

  // Clear any previous errors
  setError(null);
} catch (err) {
  console.error(err);
  setError('City not found. Please try again.');
  setWeather(null);
  setForecast([]);
}
};

return (
<div className="app">
  <h1>Weather Forecast App</h1>
  <SearchBar onSearch={fetchWeather} />
  {error && <p style={{ color: 'red' }}>{error}</p>}
  {weather && <WeatherCard weather={weather} />}
  {forecast.length > 0 && <Forecast forecast={forecast} />}
</div>
);
};








// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

 export default App
