import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from './Weather';
function App() {
  //data from api
  const [data, setData] = useState("");

  //data from input field
  const [change, setChange] = useState("");
  const [cityName, setCityName] = useState("");
  
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
      );
      let data = await response.json();
      setData(data);
      console.log(data) 
    }

    
     isCityEntered() && fetchData() ;
    
  }, [cityName]);



  var isCityEntered = () => (
    (cityName !== "") ? true : false
  )
  
  return <div className="App">
    <input type='text' className='something' placeholder="enter city name"onChange={e => setChange(e.target.value)}/>
    <button onClick={() => {setCityName(change)}}>Get Data</button>
  {isCityEntered() && <Weather /> }
  </div>
  
}

export default App;
