import React, { Component } from "react";
import { Box, Link, Fab } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import "./styles.css";
import ReactDOM from "react-dom";
import MainPage from "../MainPage";
import { Redirect } from "react-router-dom";
import { Route, Router, BrowserRouter } from "react-router-dom";

export default class BackButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needGo: 0,
    };
  }
  mainPage() {
    this.setState({ needGo: 1 });
  }
  render() {
    console.log("back bt");
    console.log(this.props.curentUser);
    if (this.state.needGo === 1 && this.props.curentUser) {
      return (
        <Redirect
          to={{
            pathname: "/mainPage",
            state: {
              curentUser: this.props.curentUser,
            },
          }}
        />
      );
    }
    else if (this.state.needGo === 1 && !(this.props.curentUser)){
      return (
        <Redirect
          to={{
            pathname: "/admin",
          }}
        />
      );
    }
    return (
      <Box mb={1} mt={10} position="static">
        <Fab
          variant="contained"
          color="secondary"
          startIcon={<ArrowBack />}
          onClick={() => {
            this.mainPage();
          }}
        >
          <ArrowBack /> Back to Main Page
        </Fab>
      </Box>
    );
  }
}
