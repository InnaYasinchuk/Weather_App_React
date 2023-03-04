import React from "react";

export default function Weather() {
  return (
    <section className="full-screen">
      <br />
      <form action="" id="search-form">
        <input
          type="text"
          placeholder="Choose your city 🌍"
          className="input"
          id="input"
          autocomplete="off"
        />
        <input type="submit" value="Go !!!" className="button" />
      </form>
      <h4 className="date" id="date">
        Today
      </h4>
      <div className="city">
        <div className="current-city">
          <h1></h1>
          <div className="h2">
            <span id="temperature"></span>
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
