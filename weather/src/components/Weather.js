import React from "react";
import "./Weather.css";
function Weather({ code, cityName, temperatureInfo, weatherInfo }) {

  const htmlData = () => (
    <>
      <h3 className="city-name">{cityName}</h3>
      <h2 className="value"> {Math.round(temperatureInfo.temp)}°</h2>
      <p className="description">{weatherInfo[0].description}</p>
      <img
        className="icon"
        src={`http://openweathermap.org/img/w/${weatherInfo[0].icon}.png`}
      />
      <p className="feels-like">
        Feels like:
        <span className="bigger">
          {Math.round(temperatureInfo.feels_like)}°
        </span>
      </p>
      <p className="temp-min">
        min:
        <span className="bigger">{Math.round(temperatureInfo.temp_min)}°</span>
      </p>
      <p className="temp-min">
        max:
        <span className="bigger">{Math.round(temperatureInfo.temp_max)}°</span>
      </p>
    </>
  );

  return (
    // checks if city is found
    code === 200 ? (
      <div className="weather-container">
        {/* if props are not undefined show data*/}
        {(temperatureInfo && weatherInfo) && htmlData()}
        
      </div>
    ) : (
        // display if city is not found
      <>City not found</>
    )
  );
}

export default Weather;
