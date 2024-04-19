import React from 'react';
import { Card, CardContent, CardMedia, Button, Link, Typography, Grid, Container } from '@mui/material';
import FileOpenRoundedIcon from '@mui/icons-material/FileOpenRounded';

const Resources = ({ data }) => {
  const { frontmatter: { title, Resources } } = data;

  return (
    <Container style={{backgroundColor:"#00308F"}} >
      <Typography variant="h3" align="center" sx={{ mt: 4, mb: 2 }} style={{color:"white"}}>
        {title}
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {Resources.map((resource, index) => (
          <Grid item key={index}>
            <Link href={resource.link} underline="none" target="_blank" rel="noopener noreferrer">
              <Card
                sx={{
                  backgroundColor: ' ',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: 250,
                  height: 250,
                  transition: 'background-color 0.3s', // Smooth transition effect
                  ':hover': {
                    backgroundColor: '#FF9999', // Light red color on hover
                  },
                }}
              >
                <CardMedia
                  component={FileOpenRoundedIcon}
                  sx={{ fontSize: 100, color: 'red' }} // Set the color to red
                />
                <CardContent>
                  <Typography variant="h6" align="center" style={{ textDecoration: 'underline' }}>
                    {resource.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Resources;
