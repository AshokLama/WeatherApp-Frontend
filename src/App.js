import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);//stores current weather data
  const [forecast, setForecast] = useState([]);//stores 5-day forecast
  const [error, setError] = useState("");//stores error messages



//Makes API call to get current weather and 5-day forecast
  const fetchWeather = async (city) => {
    if (!city) {
      setError("Please enter a city");
      setWeather(null);
      setForecast([]);
      return;
    }
    //When you type a city in the search box, it should fetch weather using:
    //
    try {
      setError("");

      // Current Weather
      const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(res.data);
      console.log(res.data);
      console.log(res.data);
      console.log("Weather data:", res.data);
      // 5-day Forecast
      const forecastRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
   //Filters forecast to get one value per day
      const daily = forecastRes.data.list.filter((item, i) => i % 8 === 0);
      setForecast(daily);

    } catch (err) {
      setError("City not found or API key invalid.");
      setWeather(null);
      setForecast([]);
    }
  };

  //When you click “My Location”, your app should use geolocation coordinates (latitude and longitude) and fetch weather using:
  const fetchLocationWeather = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      try {
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
        setWeather(res.data);

        const forecastRes = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
        const daily = forecastRes.data.list.filter((item, i) => i % 8 === 0);
        setForecast(daily);
      } catch (err) {
        setError("Failed to fetch location weather.");
      }
    });
  };

  return (
      <div style={{ textAlign: "center", fontFamily: "Arial" }}>
        <h1>🌤 Weather App</h1>

        <Search onSearch={fetchWeather} onLocation={fetchLocationWeather} />

        {error && <p style={{ color: "red" }}>{error}</p>}

        {weather && <WeatherCard data={weather} />}
        {forecast.length > 0 && <Forecast data={forecast} />}
      </div>
  );
}

export default App;