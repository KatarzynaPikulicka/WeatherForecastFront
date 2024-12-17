import React from "react";

export function useDarkMode() {
  const [darkMode, setDarkMode] = React.useState(
    () => localStorage.getItem("theme") === "dark",
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
}

export function useGeolocation() {
  const [coords, setCoords] = React.useState();
  const [geoError, setGeoError] = React.useState("");
  const FALLBACK_COORDS = {
    lat: 50.049683,
    lng: 19.944544,
  };

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(error);
          setGeoError("Wystąpił błąd związany z geolokacją");
          setCoords(FALLBACK_COORDS);
        },
      );
    } else {
      setGeoError("Twoje urządzenie nie obsługuje geolokacji");
      setCoords(FALLBACK_COORDS);
    }
  }, []);

  return { coords, setCoords, geoError };
}

export function useWeatherForecast(coords) {
  const [forecast, setForecast] = React.useState();
  const [forecastError, setforecastError] = React.useState("");

  React.useEffect(() => {
    if (!coords) {
      return;
    }
    const fetchWeatherForecast = async () => {
      try {
        const response = await fetch(
          `https://weatherforecastapi-c5p7.onrender.com/weather/7-day-forecast?latitude=${coords.lat}&longitude=${coords.lng}`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setForecast(result);
      } catch (err) {
        console.error(err);
        setforecastError("Wystąpił błąd przy pobieraniu danych z API");
        setForecast({});
      }
    };

    fetchWeatherForecast();
  }, [coords]);

  return { forecast, forecastError };
}

export function useWeeklySummary(coords) {
  const [weeklySummary, setWeeklySummary] = React.useState();
  const [summaryError, setSummaryError] = React.useState("");

  React.useEffect(() => {
    if (!coords) {
      return;
    }
    const fetchWeeklySummary = async () => {
      try {
        const response = await fetch(
          `https://weatherforecastapi-c5p7.onrender.com/weather/weekly-summary?latitude=${coords.lat}&longitude=${coords.lng}`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setWeeklySummary(result);
      } catch (err) {
        console.error(err);
        setSummaryError("Wystąpił błąd przy pobieraniu danych z API");
        setWeeklySummary({});
      }
    };

    fetchWeeklySummary();
  }, [coords]);

  return { weeklySummary, summaryError };
}
