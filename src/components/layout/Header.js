
const Header = (props)=> {
    return(
        <div className="header"> 
            <h1>Weather <span>by Heizo & Elionardo</span></h1>
            <p>{props.time}<span>  Horario Local</span></p>
        </div>
    )
}

export default Header;