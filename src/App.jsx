import React, { useEffect } from 'react';
import {FiSearch,} from 'react-icons/fi';
import {FaMapMarker,FaTint,FaWind,}  from 'react-icons/fa'; 
import {MdWindPower} from 'react-icons/md'
import { useState } from 'react';
import {} from 'react-icons/ai';

import './App.css';
import img1 from './assets/sun-cloud-1.png';
import img2 from './assets/background.jpg';




const App = () => {

  const [city, setCity] = useState("");
  const [info, setInfo] = useState([]);
  const [ temperature , setTemperature] = useState(null);
  const [image , setImage] = useState("")
  




 const fetchWeatherData = async(city)=>{

 

  

  
  try{
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37c8345b39f7b5e16deb947748c98196`);
  const response = await data.json();
  console.log(response);
  setInfo([response]);
  setTemperature(response.main.temp);
  const dataImg = ` https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
  setImage(dataImg);
  console.log(dataImg)


 

  }
  catch(err){
    console.log(err)


  }
  
}


const handleClick=()=>{
  if (!city.trim()) {
    alert("Please enter a city name!");
    return;
  }

 fetchWeatherData(city);

}

useEffect(()=>{

  fetchWeatherData("Hyderabad")
  

},[])


return(
  <>


  <div className="outer">
  
  </div>
  
   
   
    <div className="inneroneone">

    </div>
      <div className="innerone">
      

      <div className="one">
    <input  value={city} placeholder={"enter your city "}onChange={(e)=>setCity(e.target.value)}></input>
    <button onClick={handleClick}><FiSearch/></button>
    </div>
    {
      info.map((i)=>(
        

       <form>
        <div className="Temperature">
          <img src={img1}></img>
          
          <h2> {(temperature-273).toFixed()}°c</h2>
          <h4>{i.name}</h4>
          

        </div>
        <div className="factors">
          <div className="humidity">
         <button>{<FaTint/>}</button>
         <div className="humid2">
         <h3>{i.main.humidity}%</h3>
         <h3>Humidity</h3>
         </div>

         </div>
         <div className="wind">
         <div className="windone">
          <button>
            <MdWindPower/>
          </button>
         </div>
         <div className="wind2">
          <h3>{i.wind.speed}</h3>
          <h3>Wind Speed</h3>
         </div>
         </div>



        </div>

       </form>
        
       
      ))
    }
 
 </div>
 
 
 
 
  </>
)


}



  
export default App