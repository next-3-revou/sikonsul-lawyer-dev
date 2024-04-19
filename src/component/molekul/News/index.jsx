// import React from 'react'
import { useEffect, useState } from 'react'
import { ListNews } from '../../../component'
import { getAllNews } from '../../../services';

const News = () => {

  const [news, setNews] = useState([""]);
  
  useEffect(() => {
    const fetchDataNews = async () => {
      const data = await getAllNews();
      setNews(data);
    };
    fetchDataNews();
  }, []);


  const handleNewsClick = (articleUrl) => {
    window.open(articleUrl, '_blank');
  };
  
  console.log(news)
  return (
    <div className="content-section">
      <div className="content-title pb-6">
        <h2 className='text-black text-left text-xl font-semibold'>News</h2>
      </div>
      {news.map((article, index) => (
        <ListNews key={index} title={article.title} date={article.publishedAt} onClick={()=>handleNewsClick(article.url)} />
      ))}
    </div>
  )
}

export default News
