import React, { Component } from "react";
// import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import tileData from "./tileData";
import "./styles.css";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import DetailPage from "../DetailPage";
import AdminPreviewCard from "../AdminPreviewCard";
// import NetBackground from "../NetBackground";
import ReactDOM from "react-dom";
import { getPosts } from "../../actions/post";
import { Redirect } from "react-router-dom";

class AdminGridContainer extends React.Component {
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
  }
  detail(post) {
    console.log(post);
    this.setState({ all: post });
  }

  fetchData = () => {
    getPosts(this);
  };
  
  render() {
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
              <AdminPreviewCard
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
              ></AdminPreviewCard>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default AdminGridContainer;
