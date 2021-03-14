import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./Weather";

function App() {
  //data from api
  const [data, setData] = useState("");

  //data from input field
  const [change, setChange] = useState("");
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      let data = await response.json();
      setData(data);
    }

    // if true call fetchData function
    isCityEntered() && fetchData();
  }, [cityName]);

  // checks if city is entered
  var isCityEntered = () => (cityName !== "" ? true : false);

  return (
    <div className="App">
      <div className="input-container">
        <input
          type="text"
          className="city-input"
          placeholder="Enter City Name"
          onChange={(e) => setChange(e.target.value)}
        />
        <button
          className="btn-search"
          onClick={() => {
            setCityName(change);
          }}
        >
          Get Data
        </button>
      </div>
      {/* Renders Weather component only if city is entered */}
      {isCityEntered() && (
        <Weather
          code={data.cod}
          cityName={data.name}
          temperatureInfo={data.main}
          weatherInfo={data.weather}
        />
      )}
    </div>
  );
}

export default App;
