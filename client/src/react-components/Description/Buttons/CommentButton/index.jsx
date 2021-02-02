import React, { Component } from "react";
import { Button, TextField, Grid, Box } from "@material-ui/core";
import { RateReview } from "@material-ui/icons";

export default class CommentButton extends Component {
  constructor(props) {
    super(props);
  }
  handleSendComment() {
    console.log(this.props.comment);
  }
  render() {
    return (
      <Button startIcon={<RateReview />} variant="contained" color="secondary">
        Comment
      </Button>
    );
  }
}
