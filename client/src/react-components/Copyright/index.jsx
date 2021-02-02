import React, { Component } from "react";
import { Typography, Link } from "@material-ui/core";

class Copyright extends Component {
  render() {
    return (
      <div>
        <Typography variant="body2" color="primary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="/Login">
            The BluBook
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    );
  }
}

export default Copyright;
