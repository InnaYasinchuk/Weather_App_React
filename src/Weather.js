import React, {useState} from "react";
import axios from 'axios';
import "./Weather.scss";

export default function Weather() {

  const [temperature, setTemperature] = useState(null);
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);

  }

  let apiKey = "e28a7272e21d11872e3e9e3a2498fa94";
  // 2bd326a60dc89a53287e446e819664df
  let city = 'London';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <section className="full-screen">
      <br />
      <form action="" id="search-form">
        <input
          type="text"
          placeholder="Choose your city 🌍"
          className="input"
          id="input"
          // autocomplete="off"
        />
        <input type="submit" value="Go !!!" className="button" />
      </form>
      <h4 className="date" id="date">
        Today
      </h4>
      <div className="city">
        <div className="current-city">
          <h1>{city}</h1>
          <div className="h2">
            <span id="temperature">{temperature + ' '}</span>
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
          <img id="icon" src="" alt="" width="110px" />
        </div>
        <div className="details-item">
          <p id="description">Sky:</p>
          <p id="wind">Wind:</p>
          <p id="humidity">Humidity:</p>
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
    </section>
  );
}
