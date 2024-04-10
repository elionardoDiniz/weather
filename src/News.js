import { useState,useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel';


const News = () =>{

    const [news,setNewsData] = useState(
        {
            title: null,
            description: null,
            url: null,
            date: null,
            link: null,
        }
    );
    const getRamdomNumber = () => {
        let ramdomNumber = Math.floor(Math.random() * 100);
        return ramdomNumber;
    }
    
    
    const getNewsData =  async() =>{
        const data = new Date().getDate;
        console.log(data);
        const API_KEY = 'ed0ee08d5ad243069218b7efeedd62cb'
        const API_NEWS_URL = `https://newsapi.org/v2/everything?
        q=tendencia
        &from=${data}
        &sortBy=publishedAt
        &apiKey=${API_KEY}`

        let Data = await fetch(API_NEWS_URL);
        let newsData = await Data.json();
        let number = getRamdomNumber();
        setNewsData({
            title: newsData.articles[number].title,
        })
        console.log(newsData);
    
    } 
    

    useEffect(() => {
        getNewsData();
    }, [])

    return(
        
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=f5f5f5"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}


export default News;