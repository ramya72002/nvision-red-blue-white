import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';

const StyledServiceItem = styled('div')({
  display: 'flex', // Display items in a flex container
  alignItems: 'center', // Center items vertically
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0px 20px 30px -10px rgb(38, 57, 77)',
  transition: 'transform 0.3s ease-in-out', // Add transition for zoom effect
  overflow: 'hidden', // Hide overflow content if it exceeds the specified height
  '&:hover': {
    transform: 'scale(1.01)', // Zoom in effect on hover
  },
});

const StyledImage = styled('img')({
  width: '20%', // Set width of image container
  borderRadius: '20px', // Rounded corners for image container
  marginRight: '20px', // Add margin to the right for spacing between image and content
});

const StyledContent = styled('div')({
  flex: '1', // Take up remaining space for the content
});

const Services = ({ data }) => {
  const {
    frontmatter: { title, services },
  } = data;

  const [expandedServiceIndex, setExpandedServiceIndex] = useState(null); // Track index of the expanded service

  useEffect(() => {
    // Reset expanded service index when component unmounts
    return () => {
      setExpandedServiceIndex(null);
    };
  }, []);

  return (
    <section className="py-16" style={{ backgroundColor: '#0039a6' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8" style={{ color: 'white' }}>{title}</h1>

        {services.map((service, index) => (
          <StyledServiceItem
            key={index}
            className={`bg-white p-6 rounded-md mt-8`}
            style={{
              height: expandedServiceIndex === index ? 'auto' : '300px', // Set height based on whether the service is expanded
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Reverse flex direction for odd indices
            }}
          >
            <StyledImage
              src={service.image}
              alt={`Service ${index + 1}`}
            />
            <StyledContent>
              <h2 className="text-xl font-bold mb-2" style={{ color: 'red', textDecoration: 'underline' }}>{service.title}</h2>
              <p className="mb-4">
                {expandedServiceIndex === index ? service.content : `${service.content.substring(0, 600)}...`}
              </p>
              <button
                className="text-red-500 cursor-pointer focus:outline-none"
                onClick={() => setExpandedServiceIndex(expandedServiceIndex === index ? null : index)}
              >
                {expandedServiceIndex === index ? 'Show Less' : 'Show More'}
              </button>
            </StyledContent>
          </StyledServiceItem>
        ))}
      </div>
    </section>
  );
};

export default Services;
