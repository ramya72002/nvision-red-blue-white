import React, { useState } from 'react';
import { Typography, Paper, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import { BsArrowRight } from 'react-icons/bs'; // Importing an arrow icon

// Styled components for custom styling
const StyledContainer = styled('div')({
  backgroundColor: '#F8F9FA', // Light gray background color
  padding: '40px',
});

const StyledJobPaper = styled(Paper)({
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
  marginBottom: '30px', // Add margin between job opportunities
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)', // Increased scale on hover
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)', // Increased shadow on hover
  },
});

const StyledTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#00308F', // Dark blue title color
  cursor: 'pointer', // Cursor changes to pointer on hover
});

const StyledSubtitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333333', // Dark gray subtitle color
});

const StyledDescription = styled(Typography)({
  fontSize: '16px',
  marginBottom: '10px',
  color: '#555555', // Gray text color
});

const StyledList = styled('ul')({
  listStyleType: 'disc',
  paddingLeft: '20px',
  marginBottom: '10px',
  color: '#555555', // Gray text color
});

const StyledApplyButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: '#FF6347', // Red apply button color
  color: 'white', // White text color
  '&:hover': {
    backgroundColor: '#FF7F50', // Lighter shade of red on hover
  },
});

const Careers = ({ data }) => {
  const {
    frontmatter: { title, content },
  } = data;

  // State to track which job details are expanded
  const [expandedJobIndex, setExpandedJobIndex] = useState(null);

  // Function to handle click on job title
  const handleTitleClick = (index) => {
    setExpandedJobIndex(index === expandedJobIndex ? null : index);
  };

  return (
    <StyledContainer>
      <Typography variant="h3" className='text-4xl font-bold text-center mb-8' style={{ color: "#00308F", marginBottom: '40px' }}>
        {title}
      </Typography>
      {content.map((job, index) => (
        <StyledJobPaper key={index}>
          <StyledTitle onClick={() => handleTitleClick(index)}>
            {job.title}
          </StyledTitle>
          {expandedJobIndex === index && (
            <>
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
            </>
          )}
        </StyledJobPaper>
      ))}
    </StyledContainer>
  );
};

export default Careers;
