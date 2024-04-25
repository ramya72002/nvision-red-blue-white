import React from 'react';
import { Card, CardMedia, Grid, Typography, Container } from '@mui/material';

const Recognition = ({ data }) => {
  const { frontmatter: { title, images } } = data;

  return (
    <div style={{ backgroundImage: `url('/images/bg13.jpg')`, backgroundSize: 'cover', paddingTop: '40px', paddingBottom: '40px' }}>
      <Typography variant="h3" align="center" style={{ color: "white", marginBottom: '30px' }} >
        {title}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {images.map((image, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 300, borderRadius: '10px', overflow: 'hidden', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', ':hover': { transform: 'scale(1.05)', boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)' } }}>
              <CardMedia
                component="img"
                alt={`Recognition ${index + 1}`}
                height="740"
                image={image.path}
                sx={{ filter: 'brightness(0.7) contrast(1.2)' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Recognition;
