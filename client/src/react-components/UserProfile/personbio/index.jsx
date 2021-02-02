import React, { Component } from "react";
import { Avatar, Grid, Paper, Typography, TextField } from "@material-ui/core";

export default class PersonBio extends Component {
  render() {
    return (
      <div>
        <Paper className="Paper" variant="outlined">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Avatar>JW</Avatar>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    spacing={1}
                    justify="center"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      <Typography variant="h5">John Wick</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">Computer Scientist</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <TextField
                    label="Your Bio:"
                    placeholder="What would you like to tell others about yourself?"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
