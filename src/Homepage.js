import Header from "./components/layout/Header";
import { Routes, Route, Link } from "react-router-dom";
import WeatherApp from './WeatherApp';
import Clock from "./components/layout/clock";
import News from "./News";
import './index.css';
import WelcomeMenssage from "./components/layout/WelcomeMenssage";


function Homepage() {
  return (
    <div>
      <Header time={<Clock />} />
      <nav >
            <Link className="nav-item"  to="/clima"><i class="fa-solid fa-cloud-sun-rain"></i> Clima Agora</Link>
            <Link className="nav-item"  to="/noticias"><i class="fa-solid fa-newspaper"> </i>  Noticias</Link>
      </nav>
      <Homepage />
        <Routes>
            <Route path="/clima" element={<WeatherApp />} ></Route>
            <Route path="/noticias" element={<News/>} ></Route>
        </Routes>
      <div>
        <WelcomeMenssage />
      </div>
    </div>
  );
};

export default Homepage;
