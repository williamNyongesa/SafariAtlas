

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

## Installation and Setup
Follow these steps to set up the Safari Map project locally.

### Prerequisites
Ensure you have the following software installed:

- Python 3.8+
- Node.js 14+
- npm 6+

### Backend Setup

#### Clone the Repository:
git clone https://github.com/yourusername/safari-map.git  
- cd safari-map/safari-map-server

#### Install Dependencies:
pipenv install

#### Create the Database:
- pipenv run flask db init  
- pipenv run flask db migrate  
- pipenv run flask db upgrade

#### Run the Backend Server:
- pipenv run flask run  
  
The backend server will be running at http://127.0.0.1:5000/.

### Frontend Setup
#### Navigate to Frontend Folder:
- cd ../safari-map-ui


### Install Frontend Dependencies:
- npm install


### Run the Frontend Development Server:
- npm start


The frontend development server will be running at http://localhost:3000/.

## Usage
Once both the backend and frontend servers are running, you can access the Safari Atlas application by visiting http://localhost:3000/ in your web browser.

### Testing APIs with Thunder Client
You can use Thunder Client in Visual Studio Code to test the API endpoints. Here are some example requests:

1. Register a New User
- Endpoint: /register

- Method: POST

- Body:

 {  
  "username": "newuser",  
  "email": "newuser@example.com",  
  "password": "securepassword"  
}

2. Log In a User
- Endpoint: /login

- Method: POST

- Body:

{  
  "username": "newuser",  
  "password": "securepassword"  
}

3. Get All Locations
- Endpoint: /location

- Method: GET

- Headers:

- Authorization: Bearer <your-token>


## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue with any suggestions, bug reports, or feature requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any inquiries or support, please contact:

- William Nyongesa
- Email: marakawilliam@gmail.com
- GitHub: [https://github.com/williamNyongesa]