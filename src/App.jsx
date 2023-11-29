import './App.css'
import CurrentWeather from './components/CurrentWeather.jsx'
import SearchBar from './components/SearchBar.jsx'
import DateTime from './components/DateTime.jsx'
import DayWeather from './components/DayWeather.jsx'

function App() {

  return (
    <div className="App">
      <div className="content">
      <div className="toprow">
        <CurrentWeather></CurrentWeather>
        <SearchBar></SearchBar>
        <DateTime></DateTime>
      </div>
      <DayWeather></DayWeather>
      </div>
    </div>
  )
}

export default App
