import Comment from "../Comment";
import React, { Component } from "react";
import { Grid, Box } from "@material-ui/core";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username1: "John Wick",
      // comment1:
      //   "This is really good! Keep up with the great work! This is really good! Keep up with the great work! This is really good! Keep up with the great work! This is really good! Keep up with the great work!",
      // username2: "Alex Shan",
      // comment2:
      //   "Wow, I am actually amazed by those pictures? Are you a pro or just started with photography? Keep up with the great work! This is really good! Keep up with the great work! This is really good!",
      // username3: "Austin Wu",
      // comment3:
      //   "Wow, this is really really good! Keep up with the great work! This is really good! Keep up with the great work! One of the best posts I have ever seen so far! You are phonomenal! This is really good!",
      allComments: this.props.allComments,
    };
  }
  render() {
    console.log(this.state.allComments);
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          spacing={2}
        >
          {this.state.allComments.map((comment) => (
            <Grid item>
              <Comment
                avatar={comment.comment_user[0]}
                name={comment.comment_user}
                comment={comment.comment_content}
                likes={comment.likes}
              />
            </Grid>
          ))}
          {/* <Grid item>
            <Comment
              avatar="JW"
              name={this.state.username1}
              comment={this.state.comment1}
            />
          </Grid>
          <Grid item>
            <Comment
              avatar="AS"
              name={this.state.username2}
              comment={this.state.comment2}
            />
          </Grid>
          <Grid item>
            <Comment
              avatar="AW"
              name={this.state.username3}
              comment={this.state.comment3}
            />
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default Comments;
