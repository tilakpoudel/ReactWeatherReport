import axios from "axios";
import { CONFIG } from "./config";
export class WeatherApi {
  static getCurrentWeatherData = async (cityName) => {
    let url = CONFIG.WEATHER_API.replace("~", cityName);
    return await axios.get(url + CONFIG.WEATHER_API_KEY);
  };

  static getCovidData = async () => {
    let covid_url = CONFIG.COVID_API;
    return await axios.get(covid_url);
  };
}
