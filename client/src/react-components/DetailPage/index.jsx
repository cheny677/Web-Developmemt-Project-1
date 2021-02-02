import React, { Component } from "react";
import Gallery from "./../Gallery";
import Description from "./../Description";
import PrimarySearchAppBar from "./../PrimarySearchAppBar";
import Comments from "./../Description/Comments";
import { Grid, Box } from "@material-ui/core";
import "./styles.css";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.location.state.allInfo.post_comments,
      author: this.props.location.state.allInfo.post_username,
      title: this.props.location.state.allInfo.post_title,
      likes: this.props.location.state.allInfo.post_likes,
      images: this.props.location.state.allInfo.post_images,
      description: this.props.location.state.allInfo.post_description,
      curentUser: this.props.location.state.curentUser,
      post_id: this.props.location.state.allInfo.post_id,
    };
  }
  render() {
    console.log(this.state.post_id);
    return (
      <div>
        <Grid container direction="column">
          <Grid item>
            <PrimarySearchAppBar />
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              spacing={2}
              className={"details"}
            >
              <Grid item xs={8}>
                <Description
                  description={this.state.description}
                  author={this.state.author}
                  title={this.state.title}
                  likes={this.state.likes}
                  post_id={this.state.post_id}
                  curentUser={this.state.curentUser}
                />
              </Grid>
              <Grid item xs={4}>
                <Box mt={10} mr={2}>
                  <Gallery images={this.state.images} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Comments allComments={this.state.comments} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DetailPage;
