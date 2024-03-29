import React, { useState } from "react";
import axios from "axios";
import "./Weather.scss";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      descriptionIcon: response.data.weather[0].description,
    });
  }

  function search() {
    let apiKey = "2bd326a60dc89a53287e446e819664df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  function cityChange(e) {
    setCity(e.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="full-screen">
        <br />
        <form action="" id="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Choose your city 🌍"
            className="input"
            id="input"
            onChange={cityChange}
          />
          <input type="submit" value="Go !!!" className="button" />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}