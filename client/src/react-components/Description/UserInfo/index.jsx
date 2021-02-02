import React, { Component } from "react";
import logo from "../static/logo.jpeg";
import { Avatar, Grid, Typography } from "@material-ui/core";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.author,
      occupation: "Computer Scientist",
    };
  }
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          {/* <img
            className="mt-1"
            src={logo}
            style={{ width: "170px", height: "170px" }}
          /> */}
          <Avatar src={logo}></Avatar>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h4">{this.state.username}</Typography>
            <Typography variant="overline">{this.state.occupation}</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
