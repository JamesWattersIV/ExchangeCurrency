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
    "https://gnews.io/api/v3/search?q=forex&token=430a5cd7eda10574a972151c5673d9c9&country=uk";

  const sortBy = "publishedAt";
  const language = "en";
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [uniqueArray, setUniqueArray] = useState([]);

  //Fetch News Articles when page is loaded
  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL + "&sortBy=" + sortBy + "&language=" + language)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles.filter(onlyUnique));
        setLoading(false);
      });
  }, []);

  //Remove duplicate articles
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

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
            key={article.title + article.source.name}
            author={article.source.name}
            description={article.description}
            publishedAt={article.publishedAt}
            title={article.title}
            url={article.url}
            urlToImage={article.image}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default News;
