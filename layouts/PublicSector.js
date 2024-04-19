import React from 'react';
import { Typography, Paper, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
      opacity: 0.9,
    },
  },
}));

const PublicSector = ({ data }) => {
  const classes = useStyles();

  const {
    frontmatter: {
      title,
      content,
      certifications,
      acquisition,
      'contract vehicles': contractVehicles,
    },
  } = data;

  return (
    <Container style={{ backgroundColor: '#00308F', padding: '20px' }}>
      <Typography variant="h4" className="text-4xl font-bold text-center mb-8" style={{ color: 'white' }}>
        {title}
      </Typography>

      <Paper elevation={3} sx={{ p: 4, backgroundColor: '' }} className={classes.paper}>
        <Typography variant="h6" style={{ color: '#333333' }}>{content}</Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '' }} className={classes.paper}>
        <Typography variant="h5" style={{ color: '#333333' }}>Certifications:</Typography>
        <ul>
          {certifications.map((certification, index) => (
            <li key={index} style={{ color: '#333333' }}>{certification}</li>
          ))}
        </ul>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '' }} className={classes.paper}>
        <Typography variant="h4" style={{ color: '#333333' }}>Acquisition:</Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h5" style={{ color: '#333333' }}>Naics:</Typography>
            <ul>
              {acquisition.naics.map((naic, index) => (
                <li key={index} style={{ color: '#333333' }}>{naic}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" style={{ color: '#333333' }}>Psc:</Typography>
            <ul>
              {acquisition.psc.map((psc, index) => (
                <li key={index} style={{ color: '#333333' }}>{psc}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '' }} className={classes.paper}>
        <Typography variant="h4" style={{ color: '#333333' }}>Contract Vehicles:</Typography>
        {Object.keys(contractVehicles).map((vehicle, index) => (
          <Paper key={index} elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '#ADD8E6' }}>
            <Typography variant="h5">{vehicle}</Typography>
            <Typography>{contractVehicles[vehicle]}</Typography>
          </Paper>
        ))}
      </Paper>
      {/* Add space above the footer */}
      <div style={{ marginTop: '20px' }}>
      </div>
    </Container>
  );
};

export default PublicSector;
