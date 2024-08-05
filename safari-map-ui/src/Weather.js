import React, { useState, useEffect } from 'react';

function Weather({ locationId }) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetchWeather(locationId);
    }, [locationId]);

    const fetchWeather = async (locationId) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/location/${locationId}/weather`);
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div>
            {weather ? (
                <>
                    <h2>Weather Information</h2>
                    <p>Temperature: {weather.temperature}°C</p>
                    <p>Description: {weather.description}</p>
                    <p>Timestamp: {new Date(weather.timestamp).toLocaleString()}</p>
                </>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default Weather;
