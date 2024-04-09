const card = (props) => {
return(
    <div  className="cardWeather">
            <h1 className="card-title"><i class="fa-solid fa-location-dot"></i>  {props.city + " " + props.country} <img width="50" src={`https://flagcdn.com/${props.country.toLowerCase()}.svg`}></img></h1>
            <div  className="card-body" >
                <ul>
                    <li>
                    <h1 className="card-temperature" >{Math.floor(props.temperature)}  <i class="fa-solid fa-temperature-low"></i></h1>
                    <p><i class="fa-solid fa-chevron-up"></i>  {Math.floor(props.maxTemp)}°  <i class="fa-solid fa-chevron-down"></i>  {Math.floor(props.minTemp)}° </p>
                    </li>
                    <li>
                        <h3 >{props.sky}</h3>
                        <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} width='60'></img>
                        <p  className="">{props.description}</p>
                    </li>
                </ul>
                <ul className="card-info" >
            <li> <i class="fa-solid fa-wind"></i> Vento:  {props.wind} Km/H</li>
                <li> <i class="fa-solid fa-droplet"></i> Umidade: {props.humidity}%</li>
                <li><i class="fa-solid fa-eye"></i>  Visilibidade:  {props.visibility}</li>
                <li> <i class="fa-solid fa-temperature-three-quarters"></i> Sensação Térmica: {Math.floor(props.feelLike)}°</li>
            </ul>
            </div>
            
           
            
            
    </div>

)

}

export default card;