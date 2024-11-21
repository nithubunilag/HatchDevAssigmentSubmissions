import React, { useState } from 'react';
import './Weather.css';

const Weather: React.FC = () => {
    const [city, setCity] = useState<string>('');
  //  const [weatherData, setWeatherData] = useState<any>(null);

    const handleSearch = () => {
       
    };
    interface WeatherData {
        city: string;
        temperature: 60;
        description: string;
    }
    const [weatherData] = useState<WeatherData | null>(null);

    

    return (
        <div className="weather-container">
            <input
                type="text"
                placeholder="Search for cities..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {weatherData && (
                <div className="weather-info">
                    <h1>{weatherData.city}</h1>
                    <p>{weatherData.temperature}°C</p>
                    <p>{weatherData.description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
