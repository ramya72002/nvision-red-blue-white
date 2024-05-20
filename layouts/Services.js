import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';

const StyledServiceItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0px 20px 30px -10px rgb(38, 57, 77)',
  transition: 'transform 0.3s ease-in-out',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.01)',
  },
});

const StyledImage = styled('img')({
  width: '20%',
  borderRadius: '20px',
  marginRight: '20px',
});

const StyledContent = styled('div')({
  flex: '1',
});

const Services = ({ data }) => {
  const {
    frontmatter: { title, services },
  } = data;

  const [expandedServiceIndex, setExpandedServiceIndex] = useState(null);

  useEffect(() => {
    return () => {
      setExpandedServiceIndex(null);
    };
  }, []);

  return (
    <section className="py-16" style={{ backgroundImage: `url('/images/bg18.jpg')`, backgroundSize: 'cover', backgroundColor: '#0039a6' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8" style={{ color: 'white' }}>{title}</h1>

        {services.map((service, index) => (
          <StyledServiceItem
            key={index}
            className={`bg-white p-6 rounded-md mt-8`}
            style={{
              height: expandedServiceIndex === index ? 'auto' : 'fit-content', // Updated height to fit content
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
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
