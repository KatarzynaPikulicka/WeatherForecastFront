import {
  useDarkMode,
  useGeolocation,
  useWeatherForecast,
  useWeeklySummary,
} from "./hooks";
import { DarkModeSwitch } from "./components/DarkModeSwitch";
import { WeatherTable } from "./components/WeatherTable";
import { Map } from "./components/Map";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";
import { ErrorDisplay } from "./components/ErrorDisplay";

function App() {
  const { toggleDarkMode } = useDarkMode();
  const { coords, setCoords, geoError } = useGeolocation();
  const { forecast, forecastError } = useWeatherForecast(coords);
  const { weeklySummary, summaryError } = useWeeklySummary(coords);

  return (
    <>
      <div className="page">
        {forecast ? (
          <div className="container">
            <div className="header">
              <h1>Prognoza pogody 🌤️</h1>
              <DarkModeSwitch toggleDarkMode={toggleDarkMode} />
            </div>
            <WeatherTable forecast={forecast} forecastError={forecastError} />
            <ErrorDisplay error={geoError} />
            {coords && <Map coords={coords} setCoords={setCoords} />}
          </div>
        ) : (
          <Loader />
        )}
        <Footer weeklySummary={weeklySummary} summaryError={summaryError} />
      </div>
    </>
  );
}

export default App;
