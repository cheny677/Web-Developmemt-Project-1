import React, { Component } from "react";
import Gallery from "../../../Gallery";
import { Grid, Paper, Typography } from "@material-ui/core";

export default class index extends Component {
  render() {
    return (
      <div>
        <Paper elevation={3} variant="outlined">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={2}
            className={"details"}
          >
            <Grid item xs={8}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h4">Landscapes</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    Hello! here are some of the mountain pictures that I took
                    last summer! I really like mountains and the nature! Hello!
                    here are some of the mountain pictures that I took last
                    summer! I really like mountains and the nature! Hello! here
                    are some of the mountain pictures that I took last summer! I
                    really like mountains and the nature! Hello! here are some
                    of the mountain pictures that I took last summer! I really
                    like mountains and the nature! Hello! here are some of the
                    mountain pictures that I took last summer! I really like
                    mountains and the nature!
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="h5" color="primary">
                        Number of likes: 100
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" color="primary">
                        Number of Comments: 20
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Gallery />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
