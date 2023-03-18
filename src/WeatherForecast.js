import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false)
  }, [props.coordinates])

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load (){
    
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    // 5f472b7acba333cd8a035ea85a0d4d4c
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="weather-forecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div  key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
   
}
