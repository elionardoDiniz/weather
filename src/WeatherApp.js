import React, { useState } from "react";
import Card from "./components/layout/card";

function WeatherApp() {
  const [inputCity, setInputCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiKey = "89691b7988191828a4db7969d42b6cfd";

  const handleChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputCity.trim()) {
      alert("Por favor, digite o nome da cidade.");
      return;
    }

    try {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}&lang=pt_br`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Cidade não encontrada. Por favor, tente novamente.");
      }
      const data = await response.json();
      setWeather({
        name: data.name,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        temperature: data.main.temp,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        feelLike: data.main.feels_like,
        weather: data.weather[0].main,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        pressure: data.main.pressure,
        sky: data.weather[0].main,
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setInputCity('')
    }
  };

  return (
    <>
      <div className="cityForm">
        <h1>Como está o Clima em </h1>
        <form onSubmit={handleSubmit}>
          <input
            id="cityInput"
            placeholder="Digite o Nome da Cidade"
            onChange={handleChange}
            type="text"
            value={inputCity}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Consultando..." : "Consultar"}
          </button>
        </form>
      </div>
      <div id="background" className="cityWeather">
        {weather && (
          <Card
            icon={weather.icon}
            description={weather.description}
            feelLike={weather.feelLike}
            city={weather.name}
            country={weather.country}
            temperature={weather.temperature}
            wind={weather.wind}
            humidity={weather.humidity}
            pressure={weather.pressure}
            minTemp={weather.minTemp}
            maxTemp={weather.maxTemp}
          />
        )}
      </div>
    </>
  );
}

export default WeatherApp;
