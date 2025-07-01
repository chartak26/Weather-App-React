// src/components/WeatherCard.js
import { WiDaySunny, WiRain, WiCloudy } from 'react-icons/wi';

const WeatherCard = ({ data, date }) => {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return <WiDaySunny size={40} />;
      case 'Rain':
        return <WiRain size={40} />;
      case 'Clouds':
        return <WiCloudy size={40} />;
      default:
        return <WiDaySunny size={40} />;
    }
  };

  return (
    <div className="weather-card">
      <div className="date">{new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</div>
      <div className="icon">
        {getWeatherIcon(data.weather[0].main)}
      </div>
      <div className="temp">
        {Math.round(data.main.temp)}°C
      </div>
    </div>
  );
};

export default WeatherCard;