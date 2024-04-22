import React from 'react';
import { Typography, Paper, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

const CustomPaper = styled(Paper)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)', // Increased scale on hover
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)', // Increased shadow on hover
    opacity: 0.95, // Slightly reduced opacity on hover
  },
}));

const PublicSector = ({ data }) => {
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

      <CustomPaper elevation={3} sx={{ p: 4, backgroundColor: '#F3F3F3', borderRadius: '10px' }}>
        <Typography variant="h6" style={{ color: '#333333' }}>{content}</Typography>
      </CustomPaper>

      <CustomPaper elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '#F3F3F3', borderRadius: '10px' }}>
        <Typography variant="h5" style={{ color: '#333333' }}>Certifications:</Typography>
        <ul>
          {certifications.map((certification, index) => (
            <li key={index} style={{ color: '#333333' }}>{certification}</li>
          ))}
        </ul>
      </CustomPaper>

      <CustomPaper elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '#F3F3F3', borderRadius: '10px' }}>
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
      </CustomPaper>

      <CustomPaper elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '#F3F3F3', borderRadius: '10px' }}>
        <Typography variant="h4" style={{ color: '#333333' }}>Contract Vehicles:</Typography>
        {Object.keys(contractVehicles).map((vehicle, index) => (
          <Paper key={index} elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '#ADD8E6', borderRadius: '10px' }}>
            <Typography variant="h5">{vehicle}</Typography>
            <Typography>{contractVehicles[vehicle]}</Typography>
          </Paper>
        ))}
      </CustomPaper>
      {/* Add space above the footer */}
      <div style={{ marginTop: '20px' }}></div>
    </Container>
  );
};

export default PublicSector;
