import React from "react";

const Card = (props) => {
  const { city, country, temperature, maxTemp, minTemp, sky, icon, description, wind, humidity, pressure, feelLike } = props;

  return (
    <div className="cardWeather">
      <h1 className="card-title">
        <i className="fa-solid fa-location-dot"></i> {city} {country && <img width="50" src={`https://flagcdn.com/${country.toLowerCase()}.svg`} alt={`${country} flag`}></img>}
      </h1>
      <div className="card-body">
        <ul>
          <li>
            <h1 className="card-temperature">{Math.floor(temperature)} <i className="fa-solid fa-temperature-low"></i></h1>
            <p><i className="fa-solid fa-chevron-up"></i> {Math.floor(maxTemp)}° <i className="fa-solid fa-chevron-down"></i> {Math.floor(minTemp)}°</p>
          </li>
          <li>
            <h3>{sky}</h3>
            <img src={`http://openweathermap.org/img/wn/${icon}.png`} width='60' alt={description}></img>
            <p>{description}</p>
          </li>
        </ul>
        <ul className="card-info">
          <li><i className="fa-solid fa-wind"></i> Vento: {wind} Km/H</li>
          <li><i className="fa-solid fa-droplet"></i> Umidade: {humidity}%</li>
          <li><i className="fa-solid fa-eye"></i> Pressão Atmosférica: {pressure}</li>
          <li><i className="fa-solid fa-temperature-three-quarters"></i> Sensação Térmica: {Math.floor(feelLike)}°</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
