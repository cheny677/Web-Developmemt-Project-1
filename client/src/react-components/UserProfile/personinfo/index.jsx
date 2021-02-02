import React, { Component } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { Save } from "@material-ui/icons";
import "./styles.css";

export default class PersonInfo extends Component {
  render() {
    return (
      <div>
        <Paper className="Paper">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item>
              <Grid
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="h5" color="secondary">
                        Followers: 100
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" color="secondary">
                        Posts: 10
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {/* G S E row */}
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item></Grid>
                    <Grid item>
                      <Typography>School:</Typography>

                      <TextField
                        id="outlined-basic"
                        label="Your School"
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid item>
                      <Typography>Email:</Typography>

                      <TextField
                        id="outlined-basic"
                        label="Your Email"
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                {/*  */}
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography>Age:</Typography>

                      <TextField
                        id="outlined-basic"
                        label="Your Age"
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid item>
                      <Typography>Occupation:</Typography>

                      <TextField
                        id="outlined-basic"
                        label="Your Occupation"
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                {/* Save button */}
                <Grid item>
                  <Grid container direction="row" justify="center" spacing={1}>
                    <Grid item>
                      <Button
                        startIcon={<Save />}
                        variant="contained"
                        color="primary"
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
