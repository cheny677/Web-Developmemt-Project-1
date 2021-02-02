import React, { Component } from "react";
// import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./styles.css";
import PreviewCard from "../PreviewCard";
import { getPosts } from "../../actions/post";
import { Redirect } from "react-router-dom";
import { getInfo } from "../../actions/user";

class GridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
      needFetch: 1,
      all: null,
      goToDetail: 0,
      userInfo: { liked_posts: [] },
      checked: 0,
    };
    // getInfo(this, this.props.curentUser);
    // console.log(this.state.userInfo.liked_posts);
  }

  // componentDidMount() {
  //   getInfo(this, this.props.curentUser);
    
  // }

  detail(post) {
    console.log(post);
    this.setState({ all: post });
  }

  fetchData = () => {
    getPosts(this);
  };

  // checkIfLiked(post_id) {
  //   if (this.state.userInfo.liked_posts != undefined) {
  //     if (post_id in this.state.userInfo.liked_posts) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   return null;
  // }

  render() {
    // await getInfo(this, this.props.curentUser);
    // if (this.state.checked < 2) {
    //   getInfo(this, this.props.curentUser);
    //   this.setState({ checked: this.state.checked + 1 });
    // }

    if (this.state.all != null) {
      return (
        <Redirect
          to={{
            pathname: "/detailPage",
            state: {
              allInfo: this.state.all,
              curentUser: this.props.curentUser,
            },
          }}
        />
      );
    }
    if (this.state.needFetch === 1) {
      this.fetchData();
      this.setState({ needFetch: 0 });
    }
    // console.log(this.state.userInfo.liked_posts);
    // getInfo(this, this.props.curentUser);
    return (
      <div className="container" style={{ width: "100%", height: "auto" }}>
        <GridList
          cellHeight="auto"
          cols={4}
          spacing={20}
          className="gridList"
          style={{ width: "80%", margin: "10px" }}
        >
          {this.state.imageList.map((post) => (
            <GridListTile key={post.post_images[0]} cols={1}>
              <PreviewCard
                currUser={this.props.curentUser}
                image={post.post_images[0]}
                title={post.post_title}
                date={post.post_date}
                text={post.post_description}
                author={post.post_username}
                likes={post.post_likes}
                // liked={post.post_id in this.state.userInfo.liked_posts}
                allInfo={post}
                onClick={() => this.detail(post)}
              ></PreviewCard>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default GridContainer;
