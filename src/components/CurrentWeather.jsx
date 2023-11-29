import "./CurrentWeather.css"
import sun from "/statuses/sun.svg"

export default function CurrentWeather(){
    return (
        <div className="CurrentWeather">
            <div className="content">
                <div className="left">
                    <img src={sun}/>
                </div>
                <div className="right">
                    <span>Sunny</span>
                    <p>15°C</p>
                    <p>89% Humidity</p>
                </div>
                <div className="bottom">
                    <p>Toulouse</p>
                </div>
            </div>
        </div>
    )
}