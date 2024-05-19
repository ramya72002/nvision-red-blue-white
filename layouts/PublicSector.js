import React from 'react';
import { Typography, Paper, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

const CustomPaper = styled(Paper)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)', // Increased scale on hover
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Soft shadow on hover
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
      DUNSU,
      'contract vehicles': contractVehicles,
    },
  } = data;

  return (
    <div style={{ color:'white',  backgroundImage: `url('/images/bg21.jpg')`,
    padding: '40px', color: '#fff' }}>
      <Typography style={{ color: 'white'}} variant="h3" align="center" gutterBottom>
        {title}
      </Typography>

      <CustomPaper elevation={3} sx={{ p: 4,color:'white',backgroundImage: `url('/images/bg.jpg')`,
 borderRadius: '10px', marginBottom: '40px' }}>
        <Typography variant="body1" style={{  lineHeight: '1.6' }}>{content}</Typography>
      </CustomPaper>

      <CustomPaper elevation={3} sx={{ p: 4, color:'white',backgroundImage: `url('/images/bg4.jpg')`, borderRadius: '10px', marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom style={{fontWeight: 'bold',color:'white', marginBottom: '20px' }}>Certifications:</Typography>
        <ul style={{ paddingLeft: '20px', marginBottom: '0' }}>
          {certifications.map((certification, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{certification}</li>
          ))}
        </ul>
      </CustomPaper>

      <CustomPaper elevation={3} sx={{ p: 4, color:'white',backgroundImage: `url('/images/bg13.jpg')`, borderRadius: '10px', marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '20px' }}>Acquisition:</Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom style={{ color: 'white', fontWeight: 'bold' }}>Naics:</Typography>
            <ul style={{ paddingLeft: '20px', marginBottom: '0' }}>
              {acquisition.naics.map((naic, index) => (
                <li key={index} style={{ color: 'white', marginBottom: '10px' }}>{naic}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom style={{ color: 'white', fontWeight: 'bold' }}>Psc:</Typography>
            <ul style={{ paddingLeft: '20px', marginBottom: '0' }}>
              {acquisition.psc.map((psc, index) => (
                <li key={index} style={{ color: 'white', marginBottom: '10px' }}>{psc}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginRight: '20px' }}>
          DUNSU / UEI / CAGE CODE :
        </Typography>
        <Typography variant="body1" style={{ lineHeight: '1.6' }}>
          {DUNSU}
        </Typography>
</div>

      </CustomPaper>

      <CustomPaper elevation={3} sx={{ p: 4, color:'white',backgroundImage: `url('/images/bg27.jpg')`, borderRadius: '10px', marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '20px' }}>Contract Vehicles:</Typography>
        {Object.keys(contractVehicles).map((vehicle, index) => (
          <Paper key={index} elevation={3} sx={{ p: 4,  backgroundImage: `url('/images/bg17.jpg')`,
          borderRadius: '10px', marginBottom: '20px' }}>
            <Typography variant="h5" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '10px' }}>{vehicle}</Typography>
            <Typography variant="body1" style={{ color: 'white', lineHeight: '1.6' }}>{contractVehicles[vehicle]}</Typography>
          </Paper>
        ))}
      </CustomPaper>
    </div>
  );
};

export default PublicSector;
