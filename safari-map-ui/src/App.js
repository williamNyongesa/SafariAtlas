
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Locations from './Locations';
import Weather from './Weather';
import UserProfile from './UserProfile';
import Register from './Register';
import Login from './Login';
import LandingPage from './LandingPage';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
