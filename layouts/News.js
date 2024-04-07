import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const News = ({ data }) => {
  const {
    frontmatter: { title, Articles },
  } = data;

  const [expandedNews, setExpandedNews] = useState([]);
  const [visible, setVisible] = useState(Array(Articles.length).fill(false));
  const router = useRouter();

  const toggleArticle = (index) => {
    if (expandedNews.includes(index)) {
      // Redirect to the article link when "Show Article" is clicked
      const articleLink = Articles[index].link;
      router.push(articleLink);
    } else {
      setExpandedNews((prev) =>
        prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
      );
    }
  };

  useEffect(() => {
    const timeoutIds = Articles.map((Article, index) =>
      setTimeout(() => {
        setVisible((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 100)
    );

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []); // Run this effect only once, similar to componentDidMount

  return (
    <section className="bg-red py-16" style={{ backgroundColor: '#87CEEB' }}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4"> {/* Changed grid layout */}
          {Articles.map((article, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-md ${
                visible[index] ? 'fade-in shadow-md' : 'invisible'
              }`}
              style={{
                boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                width: '100%',
                maxWidth: '500px', // Adjust max-width as needed
                margin: 'auto', // Center align on smaller screens
              }}
            >
              <img
                src={article.image}
                alt={`article ${index + 1}`}
                className="rounded-md mb-4"
                style={{ height: '200px', width: '100%' }} // Set a fixed height for the images (adjust as needed)
              />
              <h2 className="text-xl font-bold mb-2" style={{color:"red"}}>{article.title}</h2>
              <p className="mb-4">
                {expandedNews.includes(index)
                  ? article.content
                  : `${article.content.substring(0, 100)}...`}
              </p>
              <button
                className="text-red-500 cursor-pointer focus:outline-none"
                onClick={() => toggleArticle(index)}
              >
                {expandedNews.includes(index) ? 'Read Article' : 'Read More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
