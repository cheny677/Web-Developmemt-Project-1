import React, { Component } from "react";
import { Grid, Container, Box } from "@material-ui/core";
import PersonInfo from "./personinfo";
import PersonBio from "./personbio";
import PrimarySearchAppBar from "./../PrimarySearchAppBar";
import BackButton from "./../BackButton";
import SimpleTabs from "./tabs";
import "./styles.css";

export default class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      gender: "male",
      username: "John Wick",
      school: "UofT",
      followers: "100",
      posts: "10",
    };
  }
  render() {
    return (
      <div>
        <PrimarySearchAppBar />
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Box className="Box">
              <BackButton />
            </Box>
          </Grid>
          <Grid item>
            <Container maxWidth="lg">
              <Grid
                container
                direction="row"
                spacing={4}
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item>
                  <PersonBio />
                </Grid>
                <Grid item>
                  <PersonInfo />
                </Grid>
              </Grid>
            </Container>
            <Grid item>
              <SimpleTabs />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
