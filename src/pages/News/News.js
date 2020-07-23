import React, { Fragment, useState, useEffect } from "react";

//Component Import
import Loading from "../../components/Loading/Loading";
import PageTitle from "../../components/PageTitle/PageTitle";
import PopularNews from "../../components/PopularNews/PopularNews";

//SASS Import
import "./News.scss";

const News = () => {
  //News API End point
  const BASE_URL =
    "https://newsapi.org/v2/everything?q=forex&apiKey=bfc255afbf99427c8d41a9fbb294afc5";

  const [sortBy, setSortBy] = useState("popularity");
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [numPopArt, setNumPopArt] = useState(5);

  //Fetch News Articles when page is loaded
  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles.slice(0, numPopArt));
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <div className="news-page">
        {loading ? <Loading /> : <Fragment />}
        <PageTitle
          headingOne="FX"
          headingTwo="News"
          subHeading="Latest FX News From Around The Globe"
        />
        <div className="news-section">Hot Picks</div>
        <div className="divider"></div>
        {articles.map((article) => (
          <PopularNews
            key={article.title}
            author={article.author}
            description={article.description}
            publishedAt={article.publishedAt}
            title={article.title}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default News;
