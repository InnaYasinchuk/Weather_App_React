import React from "react";

export default function WeatherForecastDay(props) {

  function day(){
    let date = new Date(props.data.dt * 1000)
    let day = date.getDay()
    let days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
];
    return days[day]
  }

  return (
    <div>
      <p className="forecast-day">{day()}</p>
      <img className="forecast-image"
        id="icon"
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt=""
        width="60"
      />
      <p className="forecast-temperature">
        <span className="forecast-temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span> / </span>
        <span className="forecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </p>
    </div>
  );
}
