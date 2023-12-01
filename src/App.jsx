import './App.css'
import CurrentWeather from './components/CurrentWeather.jsx'
import SearchBar from './components/SearchBar.jsx'
import DateTime from './components/DateTime.jsx'
import DayWeather from './components/DayWeather.jsx'
import { inject } from '@vercel/analytics';
 
function App() {

  inject();
  return (
    <div className="App">
      <div className="content">
      <div className="toprow">
        <CurrentWeather></CurrentWeather>
        <SearchBar></SearchBar>
        <DateTime></DateTime>
      </div>
      <div className="bottomrow">
        <DayWeather></DayWeather>
        <DayWeather></DayWeather>
        <DayWeather></DayWeather>
        <DayWeather></DayWeather>
        <DayWeather></DayWeather>
        <DayWeather></DayWeather> 
      </div>
      </div>
    </div>  
  )
}

export default App
