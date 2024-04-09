import "./index.css";
import { useState } from "react";
import Card from "./components/layout/card";



function WeatherApp(props) {


  const handleChange = (i) => {
    setInputCity(i.target.value, i.target.value);
  };

  let [inputCity, setInputCity] = useState("");

  const apiKey = "89691b7988191828a4db7969d42b6cfd";

  const [weather, setWeather] = useState({
    name: "Estados Unidos",
    wind: 0,
    humidity: 0,
    temperature: 0,
    country: "US",
    visibility: 0,
    description: "",
    icon: 10n,
    feelLike: 1,
  });

  const getWeatherData = async () => {
    if (inputCity === "") {
      alert("Please enter city name");
      return;
    } else {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}&lang=pt_br`;
        let response = await fetch(url);
        let data = await response.json();
        setWeather({
          name: data.name,
          wind: data.wind.speed,
          humidity: data.main.humidity,
          temperature: data.main.temp,
          country: data.sys.country,
          visibility: data.visibility,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          feelLike: data.main.feels_like,
          weather: data.weather[0].main,
          maxTemp: data.main.temp_max,
          minTemp: data.main.temp_min,
        });
        console.log(data);
      } catch {
        alert("Cidade Invalida");
        return;
      }
    }
  };

  return (
    <>

      <div className="cityForm">
        <h1>Como está o Clima em </h1>
        <input
          placeholder="Digite O Nome da Cidade"
          onChange={handleChange}
          type="text"
          value={inputCity}
        ></input>
        <h1>?</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            getWeatherData();
          } }
        >
          Consultar
        </button>
      </div>
      <div id="background" className="cityWeather">
        <Card
          icon={weather.icon}
          description={weather.description}
          feelLike={weather.feelLike}
          city={weather.name}
          country={weather.country}
          temperature={weather.temperature}
          wind={weather.wind}
          humidity={weather.humidity}
          visibility={weather.visibility}
          minTemp={weather.minTemp}
          maxTemp={weather.maxTemp} />
      </div>
    </>
  );
}

export default WeatherApp;
