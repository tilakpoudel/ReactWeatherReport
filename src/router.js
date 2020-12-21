import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherHome from "./components/weather/weatherHome";
import CovidHome from "./components/covid/CovidHome";

import Home from "./home";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/weather" exact>
              <WeatherHome />
            </Route>
            <Route path="/covid" exact>
              <CovidHome />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
