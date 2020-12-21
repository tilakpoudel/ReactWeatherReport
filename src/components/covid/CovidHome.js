import React, { Component } from "react";
import CovidCard from "./CovidCard";

export default class CovidHome extends Component {
  render() {
    return (
      <div>
        <h1>Coid data goes here</h1>
        <CovidCard />
      </div>
    );
  }
}
