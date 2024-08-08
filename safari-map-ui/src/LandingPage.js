import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box, Grid, Container, Card, CardContent, CardMedia } from '@mui/material';
import { FaMap, FaCompass, FaUsers } from 'react-icons/fa';

import { IconContext } from 'react-icons';
import './LandingPage.css';

function LandingPage() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Safari Atlas
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Discover the world's most breathtaking safari destinations.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Join us in exploring exotic wildlife, majestic landscapes, and unforgettable experiences.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/register" sx={{ mr: 2 }}>
          Get Started
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/login">
          Log In
        </Button>
      </Box>

      <Grid container spacing={4} sx={{ mt: 8 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <IconContext.Provider value={{ color: 'primary', size: '3em' }}>
                <FaMap />
              </IconContext.Provider>
              <Typography variant="h6" component="h3" gutterBottom>
                Explore Destinations
              </Typography>
              <Typography variant="body2">
                Access detailed maps and guides to the best safari spots across the globe.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <IconContext.Provider value={{ color: 'primary', size: '3em' }}>
                <FaCompass />
              </IconContext.Provider>
              <Typography variant="h6" component="h3" gutterBottom>
                Personalized Journeys
              </Typography>
              <Typography variant="body2">
                Tailor your adventure with custom itineraries designed just for you.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <IconContext.Provider value={{ color: 'primary', size: '3em' }}>
                <FaUsers />
              </IconContext.Provider>
              <Typography variant="h6" component="h3" gutterBottom>
                Community Connect
              </Typography>
              <Typography variant="body2">
                Join a vibrant community of fellow explorers and share your experiences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPage;
