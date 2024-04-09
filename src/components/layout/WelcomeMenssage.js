
const WelcomeMenssage = () =>{
    let menssagem = null;
    let horas = new Date().getHours()
    if (horas < 12 && horas >= 6){
        menssagem = "Bom dia!"
    } else if (horas < 18 && horas >= 12){
        menssagem = "Boa tarde!"
    } else if (horas < 24 && horas >= 18){
        menssagem = "Boa noite!"
    }

    return(
        <div className="WelcomeMenssage" >
            <h1>{menssagem}</h1>
        </div>
    )
}

export default WelcomeMenssage;