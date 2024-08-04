

# 🦁  Safari Atlas : Explore the Kenya with Ease

## Overview
Safari Map is a powerful and interactive web application designed to help users explore and manage locations and weather data for safaris. Whether you're planning a expedition or simply curious about different locations, Safari Atlas provides all the tools you need for an exciting and informative experience.

## Features
User Management: Register and login securely to manage your safaris.
Location Tracking: View, add, and manage various safari locations.
Weather Information: Access current weather data for specific locations.
Interactive Map: Navigate through a dynamic and engaging map interface.
Personalized Dashboard: View personalized data related to your safari activities.

## Technologies Used
Backend: Flask, Flask-RESTful, Flask-Login, SQLAlchemy
Frontend: React, React Router
Database: PostgreSQL
Others: HTML5, CSS3, JavaScript (ES6), Bootstrap

## API Endpoints
Here's a detailed list of the available API endpoints:

1. Index
- GET /       
Returns a welcome message for the Safari Map API.
2. User
- GET /users  
Fetch a list of all users.  
 
- GET /user/<int:user_id>  
Fetch a specific user's details by user ID.

3. Location
- GET /location  
Fetch a list of all locations.

- GET /location/<int:location_id>  
Fetch a specific location's details by location ID.

- POST /location  
Add a new location (requires authentication).

- DELETE /location/<int:location_id>  
Remove a location by ID (requires authentication).

4. Weather
- GET /location/<int:location_id>/weather  
Fetch weather information for a specific location by location ID.

5. Authentication
- POST /register  
Register a new user.

- POST /login  
Log in an existing user.

- POST /logout  
Log out the current user.

