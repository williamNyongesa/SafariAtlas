import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Safari Map</h1>
            <p>Explore and manage your locations and weather data.</p>
            <nav>
                <ul>
                    <li><Link to="/locations">View Locations</Link></li>
                    <li><Link to="/profile">User Profile</Link></li>
                    <li><Link to="/weather">Weather Information</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
