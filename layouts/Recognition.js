import React from 'react';
import { Card, CardMedia, Grid, Typography, Container } from '@mui/material';

const Recognition = ({ data }) => {
  const { frontmatter: { title, images } } = data;

  return (
    <Container style={{backgroundColor: "#3a008b"}}>
      <Typography variant="h3" align="center" style={{color:"white"}} sx={{ mt: 4, mb: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {images.map((image, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt={`Recognition ${index + 1}`}
                height="740"
                image={image.path}
                sx={{ filter: 'brightness(0.7) contrast(1.2)' }}
              />
            </Card>
             {/* Add space above the footer */}
      <div style={{ marginTop: '20px' }}>
      </div>
          </Grid>
          
        ))}
      </Grid>
      
    </Container>
  );
};

export default Recognition;
