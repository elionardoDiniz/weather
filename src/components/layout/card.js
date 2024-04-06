const card = (props) => {
return(
    <div className="cardWeather">
        <div className="card-body">
            <h1 className="card-title">{props.city + " " + props.country} <img width="50" src={`https://flagcdn.com/${props.country.toLowerCase()}.svg`}></img></h1>
            <h1 className="card-temperature" >{Math.floor(props.temperature)}°<span id="celcius">celcius</span></h1>
            <h3 >{props.sky}</h3>
            <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} width='60'></img>
            <p  className="">{props.description}</p>
            <ul>
                <li> <i class="fa-solid fa-wind"></i> Vento:  {props.wind} Km/H</li>
                <li> <i class="fa-solid fa-droplet"></i> Umidade: {props.humidity}%</li>
                <li>  <i class="fa-solid fa-eye"></i>  Visilibidade:  {props.visibility}</li>
                <li> <i class="fa-solid fa-temperature-three-quarters"></i> Sensação Térmica: {Math.floor(props.feelLike)}</li>
            </ul>
    </div>
    </div>

)

}

export default card;