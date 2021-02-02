import React, { Component } from "react";
import { Grid, ThemeProvider, TextField, Button } from "@material-ui/core";
import theme from "../themes/theme.jsx";
import { RateReview } from "@material-ui/icons";
import CommentButton from "./Buttons/CommentButton";
import LikeButton from "./Buttons/LikeButton";
import ShareButton from "./Buttons/ShareButton";
import FollowButton from "./Buttons/FollowButton";
import TextContent from "./TextContent";
import UserInfo from "./UserInfo";
import BackButton from "./../BackButton";
import { commentPost } from "../../actions/post";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" };
  }

  handleComment(event) {
    this.setState({ comment: event.target.value });
    // console.log(this.state.comment);
  }

  sendComment() {
    // console.log(this.state.comment);
    // console.log(this.props.currUser);
    commentPost(
      this,
      this.state.comment,
      this.props.curentUser,
      this.props.post_id
    );
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BackButton curentUser={this.props.curentUser} />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid container item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <UserInfo author={this.props.author} />
              </Grid>
              <Grid item>
                <FollowButton />
              </Grid>
            </Grid>
          </Grid>
          {/* Second row */}
          <Grid container item>
            <TextContent
              title={this.props.title}
              content={this.props.description}
            />
          </Grid>
          {/* Button row */}
          <Grid container item>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="flex-start"
            >
              <Grid item>
                <LikeButton
                  likes={this.props.likes}
                  post_id={this.props.post_id}
                  curentUser={this.props.curentUser}
                />
              </Grid>
              <Grid item>
                {/* <Button variant="contained" color="primary" onClick={() => this.handleSendComment()} /> */}
                {/* <CommentButton
                  post_id={this.props.post_id}
                  comment={this.props.comment}
                /> */}
                <Button
                  startIcon={<RateReview />}
                  variant="contained"
                  color="secondary"
                  onClick={() => this.sendComment()}
                >
                  Comment
                </Button>
              </Grid>
              <Grid item>
                <ShareButton />
              </Grid>
            </Grid>
          </Grid>
          {/* comment section */}
          <Grid item>
            <TextField
              id="outlined-multiline-static"
              label="Write some comments!"
              multiline
              rows={6}
              variant="outlined"
              onChange={(event) => this.handleComment(event)}
            />
          </Grid>
          {/* <Grid item>
            <Comments />
          </Grid> */}
        </Grid>
      </ThemeProvider>
    );
  }
}

export default Description;
