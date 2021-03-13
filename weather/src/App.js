import "./App.css";
import React, { useEffect, useState } from "react";
function App() {

  const [data, setData] = useState("");
  const [change, setChange] = useState("");
  const [cityName, setCityName] = useState(localStorage.hasOwnProperty('city') ? localStorage.getItem['city'] : 'Beograd');
  
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
      );
      let data = await response.json();
      setData(data);
    }
    fetchData();

    
    
  }, [cityName]);

  

 function handleClick() {
    setCityName(change);
    
  }

  return <div className="App">
    <input type='text' className='something' onChange={e => setChange(e.target.value)}/>
    <button onClick={() => handleClick}>Get Data</button>
    
  </div>
  
}

export default App;
