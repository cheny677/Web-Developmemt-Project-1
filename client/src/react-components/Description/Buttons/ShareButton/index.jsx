import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Share } from "@material-ui/icons";

export default class ShareButton extends Component {
  render() {
    return (
      <div>
        <Button startIcon={<Share />} variant="contained" color="primary">
          Share
        </Button>
      </div>
    );
  }
}
