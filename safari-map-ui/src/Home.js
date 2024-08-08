import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Grid, Box } from '@mui/material';
import { FaMapMarkerAlt, FaUser, FaSun } from 'react-icons/fa';
import './Home.css'; // Make sure to create this CSS file for additional styling

function Home() {
  return (
    <Container maxWidth="lg" className="home-container">
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" gutterBottom>Welcome to Safari Map</Typography>
        <Typography variant="h6" color="textSecondary">Your gateway to exploring and managing locations and weather data with ease.</Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Box className="home-card">
            <FaMapMarkerAlt size={50} className="icon" />
            <Typography variant="h6" gutterBottom>View Locations</Typography>
            <Button variant="contained" color="primary" component={Link} to="/locations">Explore Locations</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className="home-card">
            <FaUser size={50} className="icon" />
            <Typography variant="h6" gutterBottom>User Profile</Typography>
            <Button variant="contained" color="secondary" component={Link} to="/profile">Your Profile</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className="home-card">
            <FaSun size={50} className="icon" />
            <Typography variant="h6" gutterBottom>Weather Information</Typography>
            <Button variant="contained" color="success" component={Link} to="/weather">Check Weather</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
