import React, { useState, useEffect } from 'react';

const Services = ({ data }) => {
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
    <section className="bg-blue-400 py-16"> {/* Use blue color */}
      <div className="container mx-auto max-w-[1170px] px-4">
        <h1 className="text-4xl font-bold text-center mb-8  "style={{color:"red"}}>{title}</h1> {/* Use white text color */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-md ${
                visible[index] ? 'zoom-in shadow-md' : 'invisible'
              }`}
              style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', width: '90%' }}
            >
              <img
                src={service.image}
                alt={`Service ${index + 1}`}
                className="rounded-md mb-4"
                style={{ height: '200px', width: '100%' }}
              />
              <h2 className="text-xl font-bold mb-2" style={{color:'red'}}>{service.title}</h2>
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
