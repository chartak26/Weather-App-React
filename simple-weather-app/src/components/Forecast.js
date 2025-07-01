// src/components/Forecast.js
import WeatherCard from './WeatherCard';

const Forecast = ({ data }) => {
  if (!data) return <div>Loading forecast...</div>;

  // Group forecast by day
  const dailyForecast = data.list.reduce((acc, item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!acc[date]) {
      acc[date] = item;
    }
    return acc;
  }, {});

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {Object.entries(dailyForecast).map(([date, forecastData]) => (
          <WeatherCard key={date} data={forecastData} date={date} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;