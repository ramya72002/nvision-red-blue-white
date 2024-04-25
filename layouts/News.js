import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/system';

const ArticleItem = styled('div')(({ theme }) => ({
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0px 20px 30px -10px rgb(38, 57, 77)',
  width: '100%',
  maxWidth: '500px',
  margin: 'auto',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.01)',
  },
}));

const News = ({ data }) => {
  const router = useRouter();

  const {
    frontmatter: { title, Articles },
  } = data;

  const [expandedNews, setExpandedNews] = useState([]);
  const [visible, setVisible] = useState(Array(Articles.length).fill(false));

  const toggleArticle = (index) => {
    if (expandedNews.includes(index)) {
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
    <section className="py-16" style={{ backgroundImage: `url('/images/bg.jpg')`, backgroundSize: 'cover' }}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8" style={{ color: 'white' }}>{title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4"> {/* Changed grid layout */}
          {Articles.map((article, index) => (
            <ArticleItem
              key={index}
              className={`bg-white p-6 rounded-md${visible[index] ? '' : 'invisible'}`}
            >
              <img
                src={article.image}
                alt={`article ${index + 1}`}
                className="rounded-md mb-4"
                style={{ height: '200px', width: '100%' }}
              />
              <h2 className="text-xl font-bold mb-2" style={{ color: 'red', textDecoration: 'underline' }}>{article.title}</h2>
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
            </ArticleItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
