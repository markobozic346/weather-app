
import './App.css';
import React,{useEffect, useState} from 'react'
function App() {
const [data, setData] = useState("");
// call fetch data function on initialization
 useEffect(() => {
  async function fetchData(){
    let response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=smederevska%20palanka&units=metric&appid=d7c09da0824a3c72c99771435764c729');
    let data = await response.json()
    setData(data.list);
    
  
  }
  fetchData();
   
 },[])
  


  return (

  
    <div className="App">
     {data.map(item =>{
      console.log(item)
     })}

    </div>
  )
}

export default App;
