import { Card, Grid, Paper } from "@material-ui/core";
import React, { Component } from "react";

export default class CovidCard extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3} style={{ margin: "auto" }}>
          <Grid item>
            <Card>
              Country :Nepal <br /> Number of cases : 100 <br />
              Country :Nepal <br /> Number of cases : 100 <br />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
