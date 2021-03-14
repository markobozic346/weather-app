import React from 'react'
import './Weather.css'
function Weather({cityName, temperatureInfo, weatherInfo}) {
    
    return (
        <div className="weather-container">
            
            {/* Checks if props are not undefined */}
             {(temperatureInfo && weatherInfo) && <> 
             <h3 className='city-name'>{cityName}</h3>
             <h2 className='value'> {Math.round(temperatureInfo.temp)}°</h2>
             <p className="description">{weatherInfo[0].description}</p>
             <img className='icon' src={`http://openweathermap.org/img/w/${weatherInfo[0].icon}.png`}/>
             <p className="feels-like">Feels like: <span className='bigger'>{Math.round(temperatureInfo.feels_like)}°</span></p>
             <p className="temp-min">min: <span className='bigger'>{Math.round(temperatureInfo.temp_min)}°</span></p>
             <p className="temp-min">max: <span className='bigger'>{Math.round(temperatureInfo.temp_max)}°</span> </p>
             </>}
        
        </div>
    )
}

export default Weather
