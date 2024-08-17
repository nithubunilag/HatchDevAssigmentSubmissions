
import { useState } from 'react';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = () => {
    setLoading(true);
    setError(null);

    fetch(`http://api.weatherapi.com/v1/current.json?key=edd7a96fb0944d5b8f2105145241708&q=${location}&aqi=no`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Weather App</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="Enter location"
          style={styles.input}
        />
        <button onClick={fetchWeather} style={styles.button}>
          Get Weather
        </button>
      </div>
      {loading && <p style={styles.message}>Loading...</p>}
      {error && <p style={styles.message}>Error: {error.message}</p>}
      {weatherData && (
        <div style={styles.weatherInfo}>
          <h2 style={styles.location}>{weatherData.location.name}</h2>
          <img src={weatherData.current.condition.icon} alt="Weather Icon" style={styles.icon} />
          <p style={styles.text}><strong>Temperature:</strong> {weatherData.current.temp_c}°C</p>
          <p style={styles.text}><strong>Condition:</strong> {weatherData.current.condition.text}</p>
          <p style={styles.text}><strong>Wind:</strong> {weatherData.current.wind_kph} kph</p>
          <p style={styles.text}><strong>Humidity:</strong> {weatherData.current.humidity}%</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%)',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
    width: '200vh'
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '18px',
    borderRadius: '5px',
    border: 'none',
    marginRight: '10px',
    outline: 'none',
    width: '250px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    cursor: 'pointer',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  },
  message: {
    fontSize: '18px',
    color: '#ffffff',
  },
  weatherInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#7f97a3',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  location: {
    fontSize: '28px',
    marginBottom: '10px',
  },
  icon: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '18px',
    margin: '5px 0',
  },
};

export default Weather;
