import React, { useState } from 'react';
import './Cities.css';

const Cities: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const [cityList] = useState<string[]>([]);

    const handleSearch = () => {
        // Implement API call to get cities
    };

    return (
        <div className="cities-container">
            <input
                type="text"
                placeholder="Search for cities..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {cityList.map((city, index) => (
                    <li key={index}>{city}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cities;
