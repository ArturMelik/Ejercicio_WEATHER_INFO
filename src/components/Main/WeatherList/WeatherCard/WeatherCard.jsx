import React from "react";
import "./WeatherCard.css";


const WeatherCard = ({ data }) => {
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <li className="card" >
      <strong>{data.dt_txt}</strong><br />
      🌡️ {data.main.temp}°C<br />
      💬 {data.weather[0].description}<br />
      <img src={iconUrl} alt={data.weather[0].description} />
    </li>
  );
};

export default WeatherCard;