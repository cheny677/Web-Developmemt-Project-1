import React from "react";
import MainPageButtons from "./../MainPageButtons";
import GridContainer from "./../GridContainer";
import { Box, Button } from "@material-ui/core";
import "./styles.css";
import PrimarySearchAppBar from "../PrimarySearchAppBar";
// import NetBackground from "../NetBackground";
import AddButton from "./../AddButton";
import NewPostForm from "./../NewPostForm";
import Footer from "../Footer";
import { Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goToAddPost: false,
    };
  }

  addPost() {
    this.setState({ goToAddPost: true });
  }

  render() {
    console.log("main page curr user");

    if (this.props != undefined) {
      console.log(this.props);
      if (this.props.location != undefined) {
        // console.log(this.props.location);
        console.log(this.props.location.state.curentUser);
      }
    }

    if (this.state.goToAddPost) {
      // return <NewPostForm currUser={this.props.curentUser} />;
      return (
        <Redirect
          to={{
            pathname: "/newPostForm",
            state: {
              curentUser: this.props.location.state.curentUser,
            },
          }}
        />
      );
    }
    return (
      <div className="page_container">
        {/* <NetBackground className="background" /> */}
        <div className="solid_background"> </div>
        {/* <MainPageButtons /> */}
        <PrimarySearchAppBar currUser={this.props.location.state.curentUser} />

        <Box mt={8}>
          <Button variant="contained" onClick={() => this.addPost()}>
            Add Post
          </Button>
          <GridContainer
            className="gridContainer"
            curentUser={this.props.location.state.curentUser}
          />
        </Box>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
