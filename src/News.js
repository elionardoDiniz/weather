import { useState,useEffect} from "react";

const News = () =>{

    const [News,setNewsData] = useState(
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
        const data = new Date().toDateString();
        console.log(data);

        const IBGE_API_URL = `https://servicodados.ibge.gov.br/api/v3/noticias/?busca=clima?qtd=1?page=1?de=${data}`
        let Data = await fetch(IBGE_API_URL);
        let newsData = await Data.json();
        let number = getRamdomNumber();
        setNewsData({
            title: newsData.items[number].titulo,
            description: newsData.items[number].introducao,
            url: newsData.items[number].url,
            date: newsData.items[number].data_publicacao,
            link: newsData.items[number].link,
        })
        console.log(newsData);
    
    } 

    useEffect(() => {
        getNewsData();
    }, [])

    return(
        <div>
            <ul>
                <li>
                    <h2>{News.title}</h2>
                    <p>{News.description}</p>
                    <a href={News.link}>{News.url}</a>
                    <p>{News.date}</p>
                </li>
            </ul>
       </div>
    )
}


export default News;