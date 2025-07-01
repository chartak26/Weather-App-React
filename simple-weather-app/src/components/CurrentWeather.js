// src/components/CurrentWeather.js
import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm } from 'react-icons/wi';

const CurrentWeather = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  const getWeatherIcon = () => {
    const weatherCondition = data.weather[0].main;
    switch (weatherCondition) {
      case 'Clear':
        return <WiDaySunny size={80} />;
      case 'Rain':
        return <WiRain size={80} />;
      case 'Clouds':
        return <WiCloudy size={80} />;
      case 'Snow':
        return <WiSnow size={80} />;
      case 'Thunderstorm':
        return <WiThunderstorm size={80} />;
      default:
        return <WiDaySunny size={80} />;
    }
  };

  return (
    <div className="current-weather">
      <h2>{data.name}, {data.sys.country}</h2>
      <div className="weather-icon">{getWeatherIcon()}</div>
      <div className="temperature">{Math.round(data.main.temp)}°C</div>
      <div className="weather-description">{data.weather[0].description}</div>
      <div className="details">
        <div>Humidity: {data.main.humidity}%</div>
        <div>Wind: {data.wind.speed} m/s</div>
      </div>
    </div>
  );
};

export default CurrentWeather;