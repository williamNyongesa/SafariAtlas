import React, { useState, useEffect } from 'react';

function Locations() {
    const [locations, setLocations] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const token = sessionStorage.getItem('userToken');
  
                const response = await fetch('http://127.0.0.1:5001/locations', {
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch locations');
                }
                const data = await response.json();
                console.log(data)
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
// Example login request
async function login(email, password) {
    const response = await fetch('http://127.0.0.1:5001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
  
    const data = await response.json();
    if (response.ok) {
      // Store session or token
      sessionStorage.setItem('userToken', data.token);
    } else {
      console.error(data.message);
    }
  }
  
  // Fetch locations with authentication
  async function fetchLocations() {
    const token = sessionStorage.getItem('userToken');
  
    const response = await fetch('http://127.0.0.1:5001/locations', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    const data = await response.json();
    console.log(data);
  }
  
  // Example usage
  login('email@example.com', 'password').then(() => {
    fetchLocations();
  });
  

export default Locations;
