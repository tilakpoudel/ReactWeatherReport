import React, { Component } from "react";
import "./App.css";
import Routes from "./router";
import WeatherHome from "./components/weather/weatherHome";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <WeatherHome /> */}
        <Routes />
      </div>
    );
  }
}
