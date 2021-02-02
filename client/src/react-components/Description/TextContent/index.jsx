import React, { Component } from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import "./styles.css";
export default class TextContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "AMAZING LANDSCAPES",
      content:
        "Hello! here are some of the mountain pictures that I took last summer! I really like mountains and the nature! Hello! here are some of the mountain pictures that I took last summer! I really like mountains and the nature! Hello! here are some of the mountain pictures that I took last summer! I really like mountains and the nature! Hello! here are some of the mountain pictures that I took last summer! I really like mountains and the nature! Hello! here are some of the mountain pictures that I took last summer! I really like mountains and the nature!",
    };
  }
  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography color="primary" variant="h5">
            {this.props.title}
          </Typography>
        </Grid>
        <Grid item>
          <Paper elevation={2} className="Paper">
            <Typography variant="h6" color="secondary">
              {this.props.content}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
