import "./CurrentWeather.css"
import sun from "/statuses/sun.svg"

export default function CurrentWeather(){
    return(
        <div className="CurrentWeather">
            <div className="currentweather--content">
                <div className="currentweather--left">
                    <img src={sun}/>
                </div>
                <div className="currentweather--right">
                    <span>Sunny</span>
                    <p>15°C</p>
                    <p>89% Humidity</p>
                </div>
                <div className="currentweather--bottom">
                    <p>Toulouse</p>
                </div>
            </div>
        </div>
    )
}