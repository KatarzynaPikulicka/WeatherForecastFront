import { getWeatherIcon } from "../utils";
import { ErrorDisplay } from "./ErrorDisplay";

export function WeatherTable({ forecast, forecastError }) {
  return !forecastError ? (
    <table className="table">
      <tbody>
        <tr>
          <td>Data</td>
          {forecast?.map((element, ix) => (
            <td key={`date${ix}`}>{element["date"]}</td>
          ))}
        </tr>
        <tr>
          <td>Pogoda</td>
          {forecast?.map((element, ix) => (
            <td key={`weatherCode${ix}`}>
              {getWeatherIcon(element["weatherCode"])}
            </td>
          ))}
        </tr>
        <tr>
          <td>Temperatura min</td>
          {forecast?.map((element, ix) => (
            <td key={`minTemperature${ix}`}>{element["minTemperature"]} °C</td>
          ))}
        </tr>
        <tr>
          <td>Temperatura max</td>
          {forecast?.map((element, ix) => (
            <td key={`maxTemperature${ix}`}>{element["maxTemperature"]} °C</td>
          ))}
        </tr>
        <tr>
          <td>Energia (kWh)</td>
          {forecast?.map((element, ix) => (
            <td key={`generatedEnergy${ix}`}>{element["generatedEnergy"]}</td>
          ))}
        </tr>
      </tbody>
    </table>
  ) : (
    <ErrorDisplay error={forecastError} />
  );
}
