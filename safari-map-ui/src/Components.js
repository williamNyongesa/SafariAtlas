import React, { useEffect, useState } from 'react';

function Locations() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/location');
            const data = await response.json();
            setLocations(data.locations);
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    return (
        <div>
            <h2>Locations</h2>
            <ul>
                {locations.map(location => (
                    <li key={location.id}>
                        {location.name} - Lat: {location.latitude}, Long: {location.longitude}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Locations;
