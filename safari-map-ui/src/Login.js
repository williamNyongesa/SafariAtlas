import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Print to console for debugging
            console.log('Login attempt with:', { email, password });

            const response = await fetch('http://127.0.0.1:5001/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            // if (!response.ok) {
            //     const errorData = await response.json();
            //     console.error('Error data from server:', errorData); // Log error details
            //     throw new Error(errorData.message || 'Failed to login');
            // }
            const data = await response.json();
            if (response.ok) {
                // Store session or token
                sessionStorage.setItem('userToken', JSON.stringify({ email, password }));
              } else {
                console.error(data.message);
              }
            console.log("this is the data: "+data)

            console.log('Login successful:', data);

            // Redirect to home page after successful login
            navigate('/home');
        } catch (error) {
            console.error('Error logging in:', error.message);
            setError(error.message); // Display error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="login-button" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}

export default Login;
