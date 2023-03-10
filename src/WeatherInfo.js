import React from "react";
import FormatDate from "./FormatDate";


export default function WeatherInfo(props){
  return(
    <div className="WeatherInfo">
    <h4 className="date" id="date">
        <FormatDate date = {props.data.date}/>
      </h4>
      <div className="city">
        <div className="current-city">
          <h1>{props.data.city}</h1>
          <div className="h2">
            <span id="temperature">{props.data.temperature} </span>
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
          <img id="icon" src={props.data.icon} alt={props.data.descriptionIcon} width="110px" />
        </div>
        <div className="details-item">
          <p id="description">Sky: {props.data.description}</p>
          <p id="wind">Wind: {props.data.wind} km/h</p>
          <p id="humidity">Humidity: {props.data.humidity} %</p>
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
  )
}