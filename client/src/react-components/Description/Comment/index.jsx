import React, { Component } from "react";
import { Typography, Paper, Grid, Avatar } from "@material-ui/core";
import "./styles.css";
import LikeButton from "../Buttons/LikeButton";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      comment:
        "This is really good! Keep up with the great work! This is really good! Keep up with the great work! This is really good! Keep up with the great work! This is really good! Keep up with the great work!",
      username: "John Wick",
    };
  }
  render() {
    return (
      <div>
        <Paper className="Paper" width="100%">
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>{this.props.avatar}</Avatar>
            </Grid>
            <Grid item xs>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    {this.props.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>{this.props.comment}</Typography>
                </Grid>
                <Grid item>
                  <LikeButton />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
