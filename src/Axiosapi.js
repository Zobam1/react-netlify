import React, { useState } from "react";
import axios from "axios";
import "./Axiosapi.css";

export default function AxiosAPi() {
  let [temp, setTemp] = useState("");
  let [desc, setDesc] = useState("");
  let [humid, setHumid] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [city, setCity] = useState("");

  function displayText(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=at32a2043d2f18b00363437fb0ffa1ob&units=metric`;
    axios.get(url).then(displayBody);
  }

  function displayBody(response) {
    // Handle the API response data
    console.log(response.data);
    setTemp(response.data.temperature.current);
    setDesc(response.data.condition.description);
    setHumid(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.condition.icon_url);
  }
  function displayCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <h1>Weather Search Engine °C </h1>
      <form>
        <input placeholder="Type a city" onChange={displayCity} />
        <button onClick={displayText}>Search </button>
        <ul>
          <li>{temp}</li>
          <li>{desc}</li>
          <li>{humid}</li>
          <li>{wind}</li>
          <li>
            <img src={icon} alt="weather-icon" />
          </li>
        </ul>
      </form>
    </div>
  );
}
