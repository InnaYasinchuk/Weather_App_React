import React, {useState} from "react";
import axios from 'axios';
import "./Weather.scss";

export default function Weather(props) {

  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ready:false})

  function handleResponse(response) {
        
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: 'Wednesday',
      temperature:Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      descriptionIcon: response.data.weather[0].description,
    })
    

  }

  if (weatherData.ready){
return (
    <div className="full-screen">
      <br />
      <form action="" id="search-form">
        <input
          type="text"
          placeholder="Choose your city 🌍"
          className="input"
          id="input"
         />
        <input type="submit" value="Go !!!" className="button" />
      </form>
      <h4 className="date" id="date">
        Today is {weatherData.date}
      </h4>
      <div className="city">
        <div className="current-city">
          <h1>{weatherData.city}</h1>
          <div className="h2">
            <span id="temperature">{weatherData.temperature} </span>
            <span className="fahrenheit">
              <a href="#" id="celsius">
                °C
              </a>{" "}
              |
              <a href="#" id="fahrenheit">
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="icon">
          <img id="icon" src={weatherData.icon} alt={weatherData.descriptionIcon} width="110px" />
        </div>
        <div className="details-item">
          <p id="description">Sky: {weatherData.description}</p>
          <p id="wind">Wind: {weatherData.wind} km/h</p>
          <p id="humidity">Humidity: {weatherData.humidity} %</p>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
      <div>
        <a
          href="https://github.com/InnaYasinchuk/Weather_App_React"
          className="author"
          target="_blank"
        >
          Created by Inna Yasynchuk
        </a>
      </div>
    </div>
  );
  } else {
 let apiKey = "e28a7272e21d11872e3e9e3a2498fa94";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return 'Loading ...';
  }
 
}