import './WeatherForecast.css'
import WeatherData from './WeatherData/WeatherData.jsx'
import weatherForecasts from './data.jsx'

const WeatherForecast = () => {
  return <>
    <div>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map((forecast, index) => (
          <WeatherData
            key={index}
            {...forecast}
          />
        ))}
      </section>
    </div>
  </>
}

export default WeatherForecast
