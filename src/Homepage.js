import Header from "./components/layout/Header";
import {Routes, Route, Link} from "react-router-dom";
import WeatherApp from './WeatherApp';
import Clock from "./components/layout/clock";
import News from "./News";
import {useState,useEffect} from 'react'
import './index.css';


const Homepage = () => {

        let [image, setImage] = useState({})
        const ApiKey = 'LW8asekPAdAlL6QNnlVCeBsY_ylSigWVxGBZgEM7wlk'


    useEffect(()=>{
        const fetchImage = async () => {
            try {
                let randomNumber = Math.floor(Math.random() * 10)
                return fetch(`https://api.unsplash.com/search/photos?&query=brasil&client_id=${ApiKey}`)
                                .then((response) =>
                                    response.json()
                                    )
                                .then((data) =>{
                                    setImage({
                                        ImageUrl: data.results[randomNumber].urls.full,
                                        title: data.results[randomNumber].description
                                    })
                                }

                                )
            } catch {
                console.error('Não Foi Possivel Buscar Uma Imagem');
            }
        }
        fetchImage();
    },
            []
        )



        const WelcomeMenssage = () => {


            let mensagem = null;
            let horas = new Date().getHours()
            if (horas < 12 && horas >= 6) {
                mensagem = "Bom dia!"
            } else if (horas < 18 && horas >= 12) {
                mensagem = "Boa tarde!"
            } else if (horas < 24 && horas >= 18) {
                mensagem = "Boa noite!"
            }
            return (
                <div className="WelcomeMenssageBg" style={{backgroundImage: `url('${image.ImageUrl}')`}}>
                    <p>{image.title}</p>
                    <div className="WelcomeMenssage" >
                        <h1> {mensagem}</h1>
                        <button><Link to={'/clima'} >Clima Agora</Link></button>
                        <button><Link to={'/noticias'} >Noticias</Link></button>

                    </div>
                </div>
            );
        }
        return (
            <div>
                <Header time={<Clock/>}/>
                <nav>
                    <Link className="nav-item" to="/"><i className="fa-solid fa-home"></i> Home</Link>
                    <Link className="nav-item" to="/clima"><i className="fa-solid fa-cloud-sun-rain"></i> Clima Agora</Link>
                    <Link className="nav-item" to="/noticias"><i className="fa-solid fa-newspaper"> </i> Noticias</Link>
                </nav>
                <Routes>
                    <Route path="/clima" element={<WeatherApp/>}></Route>
                    <Route path="/" element={<WelcomeMenssage/>}></Route>
                    <Route path="/noticias" element={<News/>}></Route>
                </Routes>

            </div>
        );
    }
;

export default Homepage;
