import React, { useEffect, useState } from "react";
import weatherimg from "./assets/weather.png";
import { WeatherData } from "./components/WeatherData";

export const App = () => {
  const API_KEY = "79df1eef7d113e256972454fc511be90";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    temprature: 25,
    visibility: null,
    humidity: null,
    minTemp: null,
    maxTemp: null,
    feelsLike: null,
    sunrise: null,
    sunset: null,
  });

  const getWeatherData = () => {};

  useEffect(() => {
    getWeatherData();
  }, [city]);
  return (
    <div className="bg-blue-300 min-h-screen pb-10">

      <div className="">
        <img
          src={weatherimg}
          alt="weather-icon"
          className="h-[360px] mx-auto p-5"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City Name"
          className="border-2 border-blue-400 bg-white w-2/3 md:w-1/3 px-5 py-2 my-2 block mx-auto focus:outline-0 rounded-full"
        />
      </div>
      <div className="bg-white opacity-50 p-3 my-3 w-2/3 md:w-1/3 mx-auto">
        <WeatherData weathertype="Temperature: " value={weather.temprature} />
        <WeatherData weathertype="Visibility: " value={weather.visibility} />
        <WeatherData weathertype="Humidity: " value={weather.humidity} />
        <WeatherData weathertype="Min Temp: " value={weather.minTemp} />
        <WeatherData weathertype="Max Temp: " value={weather.maxTemp} />
        <WeatherData weathertype="Feels-Like: " value={weather.feelsLike} />
      </div>
    </div>
  );
};
