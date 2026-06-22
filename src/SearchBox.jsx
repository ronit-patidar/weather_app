import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "115cc93f6c7c7bcbe3a1381785029762";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,  
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(false);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <TextField
        value={city}
        required
        id="city"
        label="Enter city"
        variant="outlined"
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
      {error && <p className="error-msg">No such place exists!</p>}  
    </form>
  );
}