import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
import { likePost } from "../../../../actions/post";
import { unlikePost } from "../../../../actions/post";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, text: "likes", numLiked: this.props.likes };
  }
  clickHandler() {
    if (this.state.liked == true) {
      unlikePost(this.props.curentUser, this.props.post_id);
      this.setState({
        liked: false,
        numLiked: this.state.numLiked - 1,
      });
    } else {
      likePost(this.props.curentUser, this.props.post_id);
      this.setState({
        liked: true,
        numLiked: this.state.numLiked + 1,
      });
    }
  }

  render() {
    if (this.state.liked == false) {
      return (
        <div>
          <Button
            startIcon={<FavoriteBorder />}
            variant="contained"
            color="default"
            onClick={() => this.clickHandler()}
          >
            {this.state.numLiked} {this.state.text}
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button
            startIcon={<Favorite />}
            variant="contained"
            color="default"
            onClick={() => this.clickHandler()}
          >
            {this.state.numLiked} {this.state.text}
          </Button>
        </div>
      );
    }
  }
}
