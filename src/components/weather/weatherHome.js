import React, { Component } from "react";
import { WeatherApi } from "./weatherApi";
import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import CurrentWeatherCard from "./CurrentWeatherCard";
import { withRouter } from "react-router-dom";

class WeatherHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Butwal",
      weatherData: {},
      isLoading: true,
    };
  }
  componentDidMount() {
    this.getWhetherData(this.state.city);
  }
  getWhetherData = (city) => {
    let self = this;
    WeatherApi.getCurrentWeatherData(city)
      .then(function (res) {
        console.log(res.data);
        self.setState({
          weatherData: res.data,
          isLoading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleSelectChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      city: event.target.value,
    });
    this.getWhetherData(event.target.value);
  };
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <CircularProgress />
        ) : (
          <div>
            <Button onClick={() => this.props.history.push("/")}>Home</Button>
            <Grid container spacing={3} style={{ margin: 20, padding: 10 }}>
              <Grid item xs={6} sm={6}>
                <TextField
                  id="locationName"
                  label="Enter LOcation "
                  variant="outlined"
                  color="secondary"
                  value={this.state.city}
                  placeholder="Enter Name"
                  helperText="Please Enter Valid LOcation "
                  error={false}
                  disabled={false}
                  onChange={this.handleChange}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Select LOcation
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=""
                    fullWidth={true}
                    onChange={this.handleSelectChange}
                  >
                    <MenuItem value="Butwal">BUtwal</MenuItem>
                    <MenuItem value="Kathmandu">Kathmandu</MenuItem>
                    <MenuItem value="Pokhara">Pokhara</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <CurrentWeatherCard data={this.state.weatherData} />
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(WeatherHome);
