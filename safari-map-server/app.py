from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask_login import (
    LoginManager,
    login_user,
    login_required,
    logout_user,
    current_user,
)
from models import db, User, Location, Weather
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# Enable CORS for cross-origin requests
CORS(app)

# Database configuration
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://willy:34522097@localhost/safari"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "your_secret_key"

# Initialize extensions
db.init_app(app)
migrate = Migrate(app, db)
api = Api(app)

# Setup login manager
login_manager = LoginManager(app)
login_manager.login_view = "login"

# User loader for login manager
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Index route
class Index(Resource):
    def get(self):
        return {"message": "Welcome to My Safari Map!"}

# User resource
class UserResource(Resource):
    @login_required
    def get(self, user_id=None):
        if user_id is None:
            # Get all users
            users = User.query.all()
            return [{"username": user.username, "email": user.email} for user in users]
        else:
            # Get a specific user
            user = User.query.get_or_404(user_id)
            return {"username": user.username, "email": user.email}

# Location resource
class LocationResource(Resource):
    @login_required
    def get(self, location_id=None):
        if location_id is None:
            # Fetch all locations
            locations = Location.query.all()
            return [
                {
                    "id": location.id,
                    "name": location.name,
                    "latitude": location.latitude,
                    "longitude": location.longitude,
                    "user_id": location.user_id,
                }
                for location in locations
            ]
        else:
            # Fetch a specific location
            location = Location.query.get_or_404(location_id)
            return {
                "id": location.id,
                "name": location.name,
                "latitude": location.latitude,
                "longitude": location.longitude,
                "user_id": location.user_id,
            }

# Weather resource
class WeatherResource(Resource):
    @login_required
    def get(self, location_id):
        weather = Weather.query.filter_by(location_id=location_id).first_or_404()
        return {
            "temperature": weather.temperature,
            "description": weather.description,
            "timestamp": weather.timestamp.isoformat(),
        }

# Register resource
class Register(Resource):
    def post(self):
        data = request.get_json()
        
        # Check if user already exists
        if User.query.filter_by(username=data["username"]).first():
            return {"message": "User already exists"}, 400

        # Create new user
        user = User(username=data["username"], email=data["email"])
        user.set_password(data["password"])
        db.session.add(user)
        db.session.commit()
        return {"message": "User created successfully"}, 201

# Login resource
class Login(Resource):
    def get(self):
        return {"message": "Please log in with your email and password."}, 200

    def post(self):
        data = request.get_json()
        
        # Find user by email
        user = User.query.filter_by(email=data['email']).first()
        
        # Check password
        if user and user.check_password(data['password']):
            login_user(user)
            return {"message": "Logged in successfully", "user": {"id": user.id, "email": user.email}}, 200
        else:
            return {"message": "Invalid email or password"}, 400

# Logout resource
class Logout(Resource):
    @login_required
    def post(self):
        logout_user()
        return {"message": "Logged out successfully"}, 200

# Add resources to the API
api.add_resource(Index, "/")
api.add_resource(UserResource, "/users", "/user/<int:user_id>")
api.add_resource(LocationResource, "/locations", "/location/<int:location_id>")
api.add_resource(WeatherResource, "/location/<int:location_id>/weather")
api.add_resource(Register, "/register")
api.add_resource(Login, "/login")
api.add_resource(Logout, "/logout")

# Run the application
if __name__ == "__main__":
    app.run(port=5001, debug=True)
