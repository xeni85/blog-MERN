import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsEntry = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=a4e31096c6114a67a4a3c36a0daefa1b`
        );

        console.log(response.data.articles)
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    if (query !== "") {
      fetchArticles();
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const addArticle = (article) => {
    const data = articles[indexOf(article)];
  };
  return (
    <div>
      <h1>News Search</h1>
      <input type="text" onChange={handleInputChange} value={query} />
      {articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.description}</p>
          <p>{article.content}</p>
          <button onClick={addArticle}>Add to Blog</button>
        </div>
      ))}
    </div>
  );
};

//api is now working

export default NewsEntry;