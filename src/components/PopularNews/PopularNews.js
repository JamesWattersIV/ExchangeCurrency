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
  const NullURL =
    "https://pbs.twimg.com/profile_images/761160432451252224/j5fy1mDI_400x400.jpg";

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="news-article-pop">
        <img src={!urlToImage ? NullURL : urlToImage} alt="" />
        <div className="info-container">
          <h1>{title}</h1>
          <h2>{author}</h2>
          <h3>{publishedAt.split(" ")[0]}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default PopularNews;
