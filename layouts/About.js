import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const SectionBox = styled(Paper)(({ theme }) => ({
  padding: '20px',
  borderRadius: '20px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.01)',
  },
}));

const SectionBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  opacity: 0.2,
  transition: 'opacity 0.3s ease-in-out',
}));

const SectionOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 2,
  background: '',
  pointerEvents: 'none',
  transition: 'opacity 0.3s ease-in-out',
  opacity: 0,
}));

const About = ({ data }) => {
  const {
    frontmatter: { title, sections },
  } = data;

  return (
    <div style={{ backgroundImage: `url('/images/bg21.jpg')`, padding: '20px' }}>
      <Typography variant="h3" className='text-4xl font-bold text-center mb-8' style={{ color: 'white', marginBottom: '30px' }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {sections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <SectionBox>
              <SectionBackground style={{ backgroundImage: `url(${section.backgroundImage})` }}></SectionBackground>
              <SectionOverlay></SectionOverlay>
              <Grid container spacing={2} style={{ position: 'relative', zIndex: 1 }}>
                <Grid item>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5" style={{ color: 'red' }}>{section.title}</Typography>
                    <img src={section.image} alt={section.title} style={{ width: '5%', marginLeft: '1rem' }} />
                  </div>
                  <Typography variant="body1" style={{ color: 'black' }}>{section.content}</Typography>
                </Grid>
              </Grid>
            </SectionBox>
          </Grid>
        ))}
      </Grid>
       {/* Add space above the footer */}
       <div style={{ marginTop: '20px' }}></div>
    </div>
  );
};

export default About;
