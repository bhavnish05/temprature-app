import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './weather.css'



 const Weather = () => {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"

  const[data,setData] = useState({});
  const[input, setInput] = useState("");

  const getTemp = async (cityName) =>{
    try {
      const apiURL = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=" +apiKey);
      const res = await apiURL.json();
      console.log("response" ,res);
      setData(res);
      //console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    getTemp("delhi")
  },[])

  const handleInput = (event) =>{
    setInput(event.target.value)
    
  }

  const handleSearch = () =>{
    getTemp(input);
    setInput("")
  }

  return (
    <>
      <div className='main-div'>
        <div
          className='im'
          style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/1540001.jpg")`,
          }}
        >
          <h1 className='heading'>Temprature</h1>

          <div className='fands'>
            <input type='text' className='form-control' value={input} onChange={handleInput}/>
            <button className='btn btn-primary' onClick={handleSearch}>Search</button>
          </div>
          
        </div>

        <div className='col-md-12 text-center mt-5'>
          <div className='shadow rounded wetherResultBox'>
            <img className='weathorIcon' src='https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png' alt='weatherIcon' />
            <h5 className='weatherCity'>{data.name}</h5>
            <h6 className='weatherTemp'>{((data?.main?.temp) - 273.15).toFixed(2)}</h6> 
          </div>
        </div>

      </div>

     
    </>
  )
}

export default Weather
