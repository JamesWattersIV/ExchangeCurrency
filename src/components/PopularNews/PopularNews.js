import React from "react";

//SASS import
import "./PopularNews.scss";

const PopularNews = ({
  author,
  description,
  publishedAt,
  title,
  url,
  urlToImage,
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="news-article-pop">
        <img src={urlToImage} alt="article image" />
        <div className="info-container">
          <h1>{title}</h1>
          <h2>{author}</h2>
          <h3>{publishedAt.split("T")[0]}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default PopularNews;
