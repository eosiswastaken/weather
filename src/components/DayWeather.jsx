import "./DayWeather.css"
import rain from "/statuses/cloud-rain.svg"

export default function DayWeather(){
    return(
        <div className="DayWeather">
            <div className="dayweather--top">
                <img src={rain} alt="" />
            </div>
            <div className="dayweather--stats">
                <p>HUmidity 89%</p>
                <p>Min. 9°C / Max 18°C</p>
                
            </div>
        </div>
    )
}