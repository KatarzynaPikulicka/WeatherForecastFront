# 🌦️ Weather Forecast Front-End
This front-end application provides a 7-day weather forecast and a weekly summary, integrating seamlessly with a backend weather forecast service. Built using React and TypeScript, it leverages geolocation data and a responsive UI to deliver detailed weather information for any chosen latitude and longitude.

## ✨ Features
- 7-Day Forecast Table:
Displays daily maximum and minimum temperatures, weather codes, sunshine duration, and estimated solar energy generation.

- Weekly Summary Footer:
Offers a comprehensive weekly overview, including minimum and maximum temperatures for the entire week, average atmospheric pressure, average daily sunshine hours, and a concise weather assessment.

- Dark Mode:
Use a switch to toggle between light and dark styling. Setting is persisted between sessions thanks to use of local storage.

- Geolocation:
App automatically sends your coordinates to weather API based on geolocation. If geolocation API is not available, you can manually move the marker on the map.

## 🚀 How to Run
### Prerequisites:

Node.js (20 or later)
NPM package manager

```bash
npm install
npm run dev
```
### Accessing the Application:

Once started, the application will be available at http://localhost:3000. Navigate to this URL in your web browser to access the weather forecast front-end interface.

## 🧪 Testing
Unit tests in vitest are written for some of the features. Run tests using:

```bash
npm run test
```

## 📜 License
This project is licensed under the MIT License. You are free to use, modify, and distribute this code, subject to the terms of the license.

## 👤 Author

Made by Kasia Pikulicka