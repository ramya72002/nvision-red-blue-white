import React from 'react';
import { Typography, Paper, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import { BsArrowRight } from 'react-icons/bs'; // Importing an arrow icon

// Styled components for custom styling
const StyledContainer = styled('div')({
  backgroundColor: '#00308F',
  padding: '40px 20px',
});

const StyledJobPaper = styled(Paper)({
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px', // Add margin between job opportunities
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.01)',
  },
});

const StyledTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: 'red',
});

const StyledSubtitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '5px',
  color: 'red',
});

const StyledDescription = styled(Typography)({
  fontSize: '16px',
  marginBottom: '10px',
  // color:'red'
});

const StyledList = styled('ul')({
  listStyleType: 'disc',
  paddingLeft: '20px',
  color: 'red',
});

const StyledApplyButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: 'red',
  color: 'white',
  '&:hover': {
    backgroundColor: '#FF6347', // Lighter shade of red on hover
  },
});

const Careers = ({ data }) => {
  const {
    frontmatter: { title, content },
  } = data;

  return (
    <StyledContainer>
      <Typography variant="h3" className='text-4xl font-bold text-center mb-8 ' style={{ color: "white" }}>
        {title}
      </Typography>
      {content.map((job, index) => (
        <StyledJobPaper key={index}>
          <StyledTitle>{job.title}</StyledTitle>
          <StyledSubtitle>Primary Responsibilities:</StyledSubtitle>
          <StyledDescription>{job.primary}</StyledDescription>
          <StyledSubtitle>Description:</StyledSubtitle>
          <StyledDescription>{job.description}</StyledDescription>
          <StyledSubtitle>Qualifications:</StyledSubtitle>
          <StyledList>
            {job.qualifications.map((qualification, idx) => (
              <li key={idx}>{qualification}</li>
            ))}
          </StyledList>
          <StyledSubtitle>Apply Instructions:</StyledSubtitle>
          <StyledDescription>{job.applyInstructions}</StyledDescription>
          <Link href="/contact" underline="none">
            <StyledApplyButton
              endIcon={<BsArrowRight />} // Adding an arrow icon to the button
            >
              Apply Now
            </StyledApplyButton>
          </Link>
        </StyledJobPaper>
      ))}
    </StyledContainer>
  );
};

export default Careers;
