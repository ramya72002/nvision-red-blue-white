import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  serviceItem: {
    // backgroundColor: theme.palette.background.paper,
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0px 20px 30px -10px rgb(38, 57, 77)',
    width: '90%',
    margin: 'auto',
    maxWidth: '500px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
}));

const Services = ({ data }) => {
  const classes = useStyles();
  

  const {
    frontmatter: { title, services },
  } = data;

  const [expandedServices, setExpandedServices] = useState([]);
  const [visible, setVisible] = useState(Array(services.length).fill(false));

  const toggleService = (index) => {
    setExpandedServices((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  useEffect(() => {
    const timeoutIds = services.map((service, index) =>
      setTimeout(() => {
        setVisible((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 200)
    );

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []); // Run this effect only once, similar to componentDidMount

  return (
    <section className="py-16" style={{ backgroundColor: '#0039a6' }}>
      <div className="container mx-auto max-w-[1170px] px-4">
        <h1 className="text-4xl font-bold text-center mb-8" style={{ color: 'white' }}>{title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${classes.serviceItem} bg-white p-6 rounded-md mt-8 ${visible[index] ? '' : 'invisible'}`}
              >
              <img
                src={service.image}
                alt={`Service ${index + 1}`}
                className="rounded-md mb-4"
                style={{ height: '200px', width: '100%' }}
              />
              <h2 className="text-xl font-bold mb-2"  style={{ color: 'red', textDecoration: 'underline' }}>{service.title}</h2>
              <p className="mb-4">
                {expandedServices.includes(index)
                  ? service.content
                  : `${service.content.substring(0, 100)}...`}
              </p>
              <button
                className="text-red-500 cursor-pointer focus:outline-none"
                onClick={() => toggleService(index)}
              >
                {expandedServices.includes(index) ? 'Show Less' : 'Show More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
