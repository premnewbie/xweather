import React from 'react'

export default function WeatherCard({obj}) {
  return (
    <div className='weather-cards'>
        <div className='weather-card'>
            <h4>Temperature</h4>
            <p>{obj.tempC}°C</p>
        </div>
        <div className='weather-card'>
            <h4>Humidity</h4>
            <p>{obj.humidity}°C</p>
        </div>
        <div className='weather-card'>
            <h4>Condition</h4>
            <p>{obj.condition}°C</p>
        </div>
        <div className='weather-card'>
            <h4>Wind Speed</h4>
            <p>{obj.windSpeed}°C</p>
        </div>
    </div>
  )
}
