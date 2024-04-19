import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sectionBox: {
    padding: '20px',
    borderRadius: '20px',
    backgroundColor: '',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
  sectionContent: {
    position: 'relative',
    zIndex: 1,
  },
  sectionBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    opacity: 0.2,
    transition: 'opacity 0.3s ease-in-out',
  },
  sectionOverlay: {
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
  },
  sectionBoxHovered: {
    '& $sectionBackground': {
      opacity: 0.5,
    },
    '& $sectionOverlay': {
      opacity: 1,
    },
  },
}));

const About = ({ data }) => {
  const classes = useStyles();

  const {
    frontmatter: { title, sections },
  } = data;

  return (
    <div style={{ backgroundColor: '#00308F', padding: '20px' }}>
      <Typography variant="h3" className='text-4xl font-bold text-center mb-8' style={{ color: 'white', marginBottom: '30px' }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {sections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Paper elevation={3} className={`${classes.sectionBox} ${classes.sectionBoxHovered}`}>
              <div className={classes.sectionBackground} style={{ backgroundImage: `url(${section.backgroundImage})` }}></div>
              <div className={classes.sectionOverlay}></div>
              <Grid container spacing={2} className={classes.sectionContent}>
                <Grid item>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5" style={{ color: 'red' }}>{section.title}</Typography>
                    <img src={section.image} alt={section.title} style={{ width: '5%', marginLeft: '1rem' }} />
                  </div>
                  <Typography variant="body1" style={{ color: 'black' }}>{section.content}</Typography>
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
