import React, { useEffect, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import Clear_icon from '../assets/Clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/dizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London'); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const weatherIcons = {
    "01d": Clear_icon,
    "01n": Clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const fetchWeather = async (city) => {
    if(city===""){
        alert("Enter City Name");
        return;
    }
    try {
      const apiKey = "c8a93e9ba10eb0e82025444488a494b9"; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if(!response.ok){
        alert(data.message);
        return;
      }

      if (data.cod === 200) {
        setWeatherData({
          temperature: Math.floor(data.main.temp),
          location: data.name,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          icon: weatherIcons[data.weather[0].icon] || Clear_icon,
        });
      } 
    } catch (error) {
        setWeatherData(false);
      console.error("Error fetching weather data");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      setCity(searchTerm.trim());
    }
  };

  const handleButtonClick = () => {
    if (searchTerm.trim() !== '') {
      setCity(searchTerm.trim());
    } else {
      alert('Please enter a city name.');
    }
  };
  

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
        <button onClick={handleButtonClick}>
          <img src={search_icon} alt="Search" />
        </button>
      </div>
      {weatherData && (
        <>
          <img src={weatherData.icon} alt="Weather Icon" className="weather-icon" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="Humidity Icon" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="Wind Icon" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
