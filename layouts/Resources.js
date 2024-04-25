import React from 'react';
import { Card, CardContent, CardMedia, Button, Link, Typography, Grid, Container } from '@mui/material';
import FileOpenRoundedIcon from '@mui/icons-material/FileOpenRounded';

const Resources = ({ data }) => {
  const { frontmatter: { title, Resources } } = data;

  return (
    <div style={{ backgroundImage: `url('/images/bg19.jpg')`, backgroundSize: 'cover', paddingTop: '40px', paddingBottom: '40px' }}>
      <Typography variant="h3" align="center" style={{ color: "white", marginBottom: '30px' }}>
        {title}
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {Resources.map((resource, index) => (
          <Grid item key={index}>
            <Link href={resource.link} underline="none" target="_blank" rel="noopener noreferrer">
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Set background color to off-white with slight transparency
                  borderRadius: '10px',
                  overflow: 'hidden',
                  width: 250,
                  height: 250,
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', // Add subtle shadow effect
                  transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition effect for transform and box-shadow
                  ':hover': {
                    transform: 'scale(1.05)', // Scale up the card on hover
                    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)', // Darken the shadow on hover
                  },
                }}
              >
                <CardMedia
                  component={FileOpenRoundedIcon}
                  sx={{ fontSize: 100, color: '#FF6347' }} // Set the color to a shade of red
                />
                <CardContent>
                  <Typography variant="h6" align="center" style={{ fontWeight: 'bold', color: '#00308F' }}>
                    {resource.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Resources;
