import React, { useState, useEffect } from 'react';

function Locations() {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const token = sessionStorage.getItem('userToken');
                if (!token) throw new Error('No token found. Please log in.');

                const response = await fetch('http://127.0.0.1:5001/locations', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch locations. Status: ' + response.status);
                }

                const data = await response.json();
                console.log('Fetched data:', data); // Log data to inspect its format

                if (Array.isArray(data)) {
                    setLocations(data);
                } else if (data && Array.isArray(data.locations)) {
                    // Handle if the response has a 'locations' property
                    setLocations(data.locations);
                } else {
                    throw new Error('Data is not an array');
                }

                setLoading(false);
            } catch (error) {
                console.error('Fetch error:', error.message); // Log detailed error message
                setError(error.message);
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Locations</h2>
            <ul>
                {Array.isArray(locations) && locations.length > 0 ? (
                    locations.map((location) => (
                        <li key={location.id}>
                            {location.name} - Latitude: {location.latitude}, Longitude: {location.longitude}
                        </li>
                    ))
                ) : (
                    <div>No locations available</div>
                )}
            </ul>
        </div>
    );
}

export default Locations;
