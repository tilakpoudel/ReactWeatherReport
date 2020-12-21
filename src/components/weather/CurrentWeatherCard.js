import {
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";

class CurrentWeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
    };
  }

  render() {
    let whether = this.props.data;
    return (
      <div style={{ margin: 20 }}>
        <Grid container spacing={2}></Grid>

        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} lg={12}>
            <Card
              style={{
                textAlign: "center",
                padding: 20,
                backgroundColor: "lightblue",
              }}
            >
              <div style={{ color: "#eb6e4b", fontSize: 16 }}>
                {new Date().toDateString()}
              </div>
              <div style={{ fontSize: 20, fontWeight: 900, marginTop: 8 }}>
                {whether.name},{whether.sys.country}
              </div>
              <div>
                SunRise : {new Date(whether.sys.sunrise).toLocaleString()}
              </div>
              <div>
                SunSet : {new Date(whether.sys.sunset).toLocaleString()}
              </div>
            </Card>
          </Grid>
        </Grid>

        <Card style={{ backgroundColor: "#bcd6de" }}>
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs={3} sm={2} style={{ margin: 10 }}>
              <div>Temperature</div>
              <div>{whether.main.temp}</div>
            </Grid>
            <Grid item xs={3} sm={2} style={{ margin: 10 }}>
              <div>Min Temperature</div>
              <div>{whether.main.temp_min}</div>
            </Grid>
            <Grid item xs={3} sm={2} style={{ margin: 10 }}>
              <div>MAx Temperature</div>
              <div>{whether.main.temp_max}</div>
            </Grid>
            <Grid item xs={3} sm={2} style={{ margin: 10 }}>
              <div>Pressure</div>
              <div>{whether.main.pressure}</div>
            </Grid>
            <Grid item xs={3} sm={2} style={{ margin: 10 }}>
              <div>Humidity</div>
              <div>{whether.main.humidity}</div>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}
export default CurrentWeatherCard;
