import moment from "moment"
import "./DateTime.css"
import "moment"

export default function DateTime(){
    console.log("test")
    return (
        <div className="DateTime">
            <p id="time">{moment().format("h:mm")}</p>
            <p id="date">{moment().format("dddd, Do MMMM")}</p>
        </div>
    )
}