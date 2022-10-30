import React, { useEffect, useState } from "react";
import axios from 'axios'


const Weather = ({ city }) => {
  console.log("city is ",city[0])
  const [weather, setWeather] = useState([]);
  const [cityName, setCityName] = useState(city[0]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    async function getWeather() {
      // const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[0]},uk&APPID=${apiKey}`
     const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city[0]}&appid=${apiKey}`)
      setWeather(data);
    }
    // `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${apiKey}`
    // `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`
    getWeather();
  }, [city]);
 
  console.log(weather)
  const dispWeather = weather.length !== undefined;
  if (dispWeather) {
    return (
      <>
       console.log(weather)
        <p>nnnn</p>
      </>
    );
  } else {
    return (
      <>
        <p>Temperature is {Math.round(weather.main.temp -273.15)} Celcius</p>
        <p>Wind is {weather.wind.speed}m/s</p>
      </>
    );
  }
};
export default Weather
