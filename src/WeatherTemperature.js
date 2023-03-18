import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="h2">
          <span id="temperature">{props.celsius} </span>
          <span className="fahrenheit">
            <a href="#" id="celsius" onClick={convertCelsius}>
              {" "}
              °C{" "}
            </a>{" "}
            |
            <a href="#" id="fahrenheit" onClick={convertFahrenheit}>
              {" "}
              °F{" "}
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="h2">
          <span id="temperature">{fahrenheit()} </span>
          <span className="fahrenheit">
            <a href="#" id="celsius" onClick={convertCelsius}>
              {" "}
              °C{" "}
            </a>{" "}
            |
            <a href="#" id="fahrenheit" onClick={convertFahrenheit}>
              {" "}
              °F{" "}
            </a>
          </span>
        </div>
      </div>
    );
  }
}
