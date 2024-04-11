import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const apiKey = "ed0ee08d5ad243069218b7efeedd62cb";
        const url = `https://newsapi.org/v2/everything?q=meteorologia&sortBy=publishedAt&pageSize=6&language=pt&apiKey=${apiKey}`;
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Erro ao carregar notícias:", error.message);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return (
    <Container>
      <Carousel heigh={'90vh'} theme="dark">
        {articles.map((article, index) => (
          <Carousel.Item key={index} link={article.url} >
            <img
            
              className="d-block w-100   mh-100 d-inline-block img-fluid mh-100 " 
              src={article.urlToImage}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="carouselCaptionBg" >
              { article.source && <p >{article.source.name}</p>}
              { article.title && <h5 className="carouselTextColor" >{article.title}</h5>}
              { article.description && <p className="carouselTextColor" >{article.description}</p>}
              </div>
              
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      
      <ul className="newsList" >
      <hr></hr>
      <h1 >Noticias</h1>
      {
        articles.map((article, index) => (

          <li>
            {article.content && <hr></hr>}
            <Link to={article.url} >
              
              {article.title && <h2>{article.title}</h2>}
              {article.description && <p>{article.description}</p>}

            
            </Link>
            
          </li>
  
        ))
      }
      </ul>
      
    </Container>
      
    
  );
};

export default News;
