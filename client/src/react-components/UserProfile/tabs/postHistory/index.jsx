import React, { Component } from "react";
import Post from "../post";
import { Grid } from "@material-ui/core";

export default class index extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item>
            <Post />
          </Grid>
          <Grid item>
            <Post />
          </Grid>
          <Grid item>
            <Post />
          </Grid>
        </Grid>
      </div>
    );
  }
}
