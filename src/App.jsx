import React, { useEffect, useState } from "react";
import weatherimg from "./assets/weather.png";
import { WeatherData } from "./components/WeatherData";
import axios from "axios";

export const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [city, setCity] = useState("pune");
  const [weather, setWeather] = useState({
    temprature: null,
    visibility: null,
    humidity: null,
    minTemp: null,
    maxTemp: null,
    feelsLike: null
  });

  const getWeatherData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(response.data);
    const weatherData = response.data;

    setWeather({
      temprature: weatherData.main.temp,
      visibility: weatherData.visibility,
      humidity: weatherData.main.humidity,
      minTemp: weatherData.main.temp_min,
      maxTemp: weatherData.main.temp_max,
      feelsLike: weatherData.main.feels_like
    });
  };

  useEffect(() => {
    if (city) getWeatherData();
  }, [city]);

  const kelvinToCelsius = (kelvin)=>{
    return ((kelvin - 273.15).toFixed(2))
  }

  return (
    <div className="bg-blue-300 min-h-screen pb-10">
      <div className="">
        <img
          src={weatherimg}
          alt="weather-icon"
          className="h-[360px] mx-auto p-3"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City Name"
          className="border-2 border-blue-400 bg-white w-2/3 md:w-1/3 px-5 py-1 md:py-2 my-2 block mx-auto focus:outline-0 rounded-full text-center text-2xl text-blue-600"
        />
      </div>
      <div className="bg-white opacity-50 p-3 my-3 w-2/3 md:w-1/3 mx-auto">
        <WeatherData weathertype="Temperature: " value={`${kelvinToCelsius(weather.temprature)} °C`} />
        <WeatherData weathertype="Visibility: " value={`${weather.visibility} miles`}/>
        <WeatherData weathertype="Humidity: " value={`${weather.humidity} %`} />
        <WeatherData weathertype="Min Temp: " value={`${kelvinToCelsius(weather.minTemp)}°C`} />
        <WeatherData weathertype="Max Temp: " value={`${kelvinToCelsius(weather.maxTemp)}°C`} />
        <WeatherData weathertype="Feels-Like: " value={`${kelvinToCelsius(weather.feelsLike)}°C`} />
      </div>
    </div>
  );
};
