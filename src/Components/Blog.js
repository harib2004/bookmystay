import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';

const imageDetails = [
  {
    url: 'https://source.unsplash.com/800x600/?hotel-room',
    description: 'Luxurious Hotel Room with a View',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-lobby',
    description: 'Elegant Hotel Lobby',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-pool',
    description: 'Relaxing Hotel Pool Area',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-restaurant',
    description: 'Fine Dining Restaurant in the Hotel',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-bedroom',
    description: 'Comfortable Hotel Bedroom',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-spa',
    description: 'Spa and Wellness Center',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-gym',
    description: 'Fitness Center with Modern Equipment',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-conference',
    description: 'Conference Room for Events',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-terrace',
    description: 'Scenic Terrace with a View',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-beach',
    description: 'Private Beach Access for Guests',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-sunset',
    description: 'Breathtaking Sunset View from the Hotel',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-spa-pool',
    description: 'Refreshing Pool at the Spa',
  },
  // Add more image details as needed
];

const Blog = () => {
  return (

    <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>

      <Grid container spacing={3} maxWidth="max">
        {/* About Us Header with Blue Background */}
        <Grid item xs={10} >
          <Paper sx={{ p: 3, backgroundColor: 'blue', color: 'white' }}>
            <Typography variant="h2" gutterBottom>
              About Us
            </Typography>
          </Paper>
        </Grid>


        <Grid>
          <Typography variant="body1" paragraph>
            Welcome to BookMyStay! We are committed to providing you with the best hotel booking experience.
          </Typography>
          <Typography variant="body1" paragraph>
            Our website offers a curated selection of hotels with a variety of features to suit every traveler's needs.
            Explore our blog to get a glimpse of the luxurious rooms, stunning lobbies, and relaxing amenities offered by
            our partnered hotels.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you are planning a business trip or a leisure vacation, BookMyStay ensures a seamless booking process,
            transparent pricing, and a wide range of accommodation options.
          </Typography>
        </Grid>

        {/* Image Grid */}
        {imageDetails.map((detail, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ p: 3 }}>
              <img src={detail.url} alt={`Blog Image ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              <Typography variant="body2" mt={2}>
                {detail.description}
              </Typography>
            </Paper>
          </Grid>
        ))}

        {/* Blog Content */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Blog Post Title 1
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to our hotel blog! In this post, we'll share insights about our luxurious rooms and exceptional services.
            </Typography>
            {/* Add more content as needed */}
          </Paper>
        </Grid>

        {/* Management component */}
        <Grid item xs={12} md={4}>
          {/* Management component can go here */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;