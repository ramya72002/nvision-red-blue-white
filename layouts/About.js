import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const About = ({ data }) => {
  const {
    frontmatter: { title, sections },
  } = data;

  return (
    <div style={{ backgroundColor: '#87CEEB', padding: '20px' }}>
      <Typography variant="h3" className='text-4xl font-bold text-center mb-8' style={{ color: '', marginBottom: '30px' }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {sections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Paper elevation={3} className="section-box" style={{ padding: '20px', borderRadius: '20px', backgroundColor: '#E5EDF7' }}>
              <Grid container spacing={2} className="section-content">
                <Grid item>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5" style={{ color: '#254263' }}>{section.title}</Typography>
                    <img src={section.image} alt={section.title} style={{ width: '5%', marginLeft: '1rem' }} />
                  </div>
                  <Typography variant="body1" style={{ color: '#6C7E9E' }}>{section.content}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
       {/* Add space above the footer */}
       <div style={{ marginTop: '20px' }}></div>
    </div>
  );
};

export default About;
