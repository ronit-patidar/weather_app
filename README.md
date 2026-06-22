# 🌤️ Weather App

A clean and minimal weather application built with React and Material UI. Search any city in the world and instantly get live weather data powered by the OpenWeatherMap API.

## 🚀 Live Demo

🔗 [https://weather-app-kappa-five-88.vercel.app/](https://weather-app-kappa-five-88.vercel.app/)


## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Displays temperature, min/max temp, humidity, and feels like
- 🌫️ Weather condition description
- ⚠️ Error handling for invalid city names
- 📱 Responsive and minimal UI

## 🛠️ Tech Stack

- **React** — UI and state management with hooks
- **Material UI (MUI)** — TextField, Button, Card components
- **OpenWeatherMap API** — Live weather data
- **CSS** — Custom styling with Inter font

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchBox.jsx       # City search input and API call
│   ├── SearchBox.css
│   ├── InfoBox.jsx         # Weather info card
│   └── InfoBox.css
├── WeatherApp.jsx          # Root component
├── WeatherApp.css
└── main.jsx
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ronit-patidar/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

In `SearchBox.jsx`, replace the API key with your own from [OpenWeatherMap](https://openweathermap.org/api):


### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔑 API Reference

This app uses the **OpenWeatherMap Current Weather API**:

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric
```

| Parameter | Description              |
|-----------|--------------------------|
| `q`       | City name                |
| `appid`   | Your API key             |
| `units`   | `metric` for Celsius     |

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "@mui/material": "^5.x",
  "@emotion/react": "^11.x",
  "@emotion/styled": "^11.x"
}
```

## 🙋‍♂️ Author

**Ronit Patidar**
- GitHub: [@ronit-patidar](https://github.com/ronit-patidar)
- LinkedIn: [ronit-patidar](https://linkedin.com/in/ronit-patidar)

---

⭐ If you found this useful, consider giving it a star on GitHub!