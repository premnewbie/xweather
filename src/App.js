import { useState } from 'react';
import './App.css';
import axios from 'axios';
import WeatherCard from './WeatherCard';

function App() {
  const [input,setInput] = useState();
  const [loading,setLoading] = useState(false);
  const [dataFetched,setDataFetched] = useState(false);
  const [tempC, setTempC] = useState();
  const [humidity, setHumidity] = useState();
  const [windSpeed,setWindSpeed] = useState();
  const [condition,setCondition] = useState();

  const obj = {
    tempC: tempC,
    condition: condition,
    humidity: humidity,
    windSpeed: windSpeed
  };

  const performAPICall = () => {
    setLoading(true);
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=648e4c6c3aa143c9b9c70636243004&q=${input}&aqi=no`
      )
      .then((res) => {
        setLoading(false);
        const data = res.data;
        handleInfo(data);
        setDataFetched(true);
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to fetch weather data")
      });
  };

  const handleInfo = (info) => {
    setTempC(info.current.temp_c);
    setHumidity(info.current.humidity);
    setWindSpeed(info.current.wind_kph);
    setCondition(info.current.condition.text);
  };

  const handleSubmit = (event) => {
    setDataFetched(false);
    event.preventDefault();
    performAPICall();
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            onInput={(e)=>setInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {loading && <p>Loading data...</p>}
      {dataFetched && <WeatherCard obj={obj}/>}
    </div>
  );
}

export default App;
