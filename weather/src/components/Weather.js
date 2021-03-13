import React from 'react'

function Weather({cityName, temperatureInfo, weatherInfo}) {
    
    return (
        <div>
            <h1>{cityName}</h1>

            {/* Checks if temperatureInfo and WeatherInfo are not undefined*/}
             {(temperatureInfo && weatherInfo) && <> 
             
             <h2>{Math.round(temperatureInfo.temp)}</h2>
             
             <img src={`http://openweathermap.org/img/w/${weatherInfo[0].icon}.png`}/>
             
             </>}
        
        </div>
    )
}

export default Weather
