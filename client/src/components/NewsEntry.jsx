import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewsEntry = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [urlToImg, setUrlToImg] = useState('');
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

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

    if (redirect) {navigate('/')};
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const addArticle = (event, index) => {
    setTitle(index.title);
    setDescription(index.description);
    setContent(index.content);
    setUrlToImg(index.urlToImage);
    console.log(title);
    createBlogArticle();
  };

  const createBlogArticle = async (event) => {
    console.log(urlToImg + ' created');
        // const newUrl = urlToImg.substring(1, urlToImg.length() - 1);
        const data = new FormData();
        data.set('title', title);
        data.set('description', description);
        data.set('content', content);
        // data.set('urlToImg', newUrl);
        const response = await fetch('http://localhost:3001/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        })

        if(response.ok) {
            response.json().then(() => {
                setRedirect(true)
            })

        } else{
                alert('Invalid username or password')
            };
        }

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
          <button onClick={(e => addArticle(e, article))}>Add to Blog</button>
        </div>
      ))}
    </div>
  );
};

//api is now working

export default NewsEntry;