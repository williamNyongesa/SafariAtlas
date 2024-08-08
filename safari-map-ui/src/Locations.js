import React, { useState, useEffect } from 'react';

function Locations() {
    const [locations, setLocations] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5001/locations');
                if (!response.ok) {
                    throw new Error('Failed to fetch locations');
                }
                const data = await response.json();
                setLocations(data);
                setLoading(false);
            } catch (error) {
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
                {locations.map((location) => (
                    <li key={location.id}>
                        {location.name} - Latitude: {location.latitude}, Longitude: {location.longitude}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Locations;
