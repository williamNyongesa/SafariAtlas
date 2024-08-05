import React, { useState, useEffect } from 'react';

function UserProfile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/user/1'); // Replace with actual user ID
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div>
            {user ? (
                <>
                    <h2>User Profile</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
}

export default UserProfile;
