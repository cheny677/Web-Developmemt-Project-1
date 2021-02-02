import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { CheckCircleOutline, CheckCircle } from "@material-ui/icons";

export default class FollowButton extends Component {
  constructor() {
    super();
    this.state = { followed: false, text: "follows", numFollowers: 0 };
  }
  clickHandler() {
    if (this.state.followed == true) {
      this.setState({
        followed: false,
        numFollowers: this.state.numFollowers - 1,
      });
    } else {
      this.setState({
        followed: true,
        numFollowers: this.state.numFollowers + 1,
      });
    }
  }
  render() {
    if (this.state.followed == false) {
      return (
        <div>
          <Button
            startIcon={<CheckCircleOutline />}
            variant="outlined"
            color="primary"
            onClick={() => this.clickHandler()}
          >
            {this.state.numFollowers} {this.state.text}
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button
            startIcon={<CheckCircle />}
            variant="outlined"
            color="primary"
            onClick={() => this.clickHandler()}
          >
            {this.state.numFollowers} {this.state.text}
          </Button>
        </div>
      );
    }
  }
}
