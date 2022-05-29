import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiKey } from "./apiKey"; // NEVER share your API keys publicly!

const CurrentWeather = () => {

  const [location, setLocation] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function getWeatherData() {
      const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);

      console.log(res.data.current);
      setWeatherData(res.data.current);  
    };
    if (location !== "") getWeatherData(); // if statement prevents needless GET requests if no user input is given
  }, [location]);

  const formHandler = (event) => {
    event.preventDefault();
    setLocation(inputValue);
  };

  const WeatherStatus = () => {
    return(
      <>
        <p>Current weather in {location}:</p>
        <p>Temperature {weatherData.temp_c} °C, Humidity {weatherData.humidity} %</p>
        <p>{weatherData.condition.text}, Cloud coverage {weatherData.cloud}%</p>
        <p>{weatherData.wind_dir} wind at {weatherData.wind_kph} km/h</p>
        <p>Feels like {weatherData.feelslike_c} °C</p>
      </>
    );
  };

  return (
    <div>
      <p>Check the current weather</p>
      <form onSubmit={formHandler}>
        <input placeholder="Type location here" onChange={(event) => setInputValue(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {weatherData === null ? null : <WeatherStatus />} {/*Data is rendered only after the API has returned something*/}
    </div>
  );
}

export default CurrentWeather;