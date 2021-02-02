import React from "react";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { PersonPinCircleSharp } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DetailPage from "../DetailPage";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import "./styles.css";
// import DetailPage from "./../DetailPage";
import { likePost, unlikePost } from "../../actions/post";
import { getInfo } from "../../actions/user";

class PreviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.allInfo,
      likes: props.likes,
      liked: false,
      likeColor: "default",
      author: props.author,
      userInfo: "",
      received: 0,
    };
    this.handleLikedClick = this.handleLikedClick.bind(this);
    // getInfo(this, this.state.author);
  }
  componentDidMount() {
    getInfo(this, this.state.author);
  }

  handleLikedClick() {
    this.setState({ liked: !this.state.liked });
    console.log(this.props.allInfo);
    if (this.state.liked == true) {
      this.handleUnlikePost();
    } else {
      this.handleLikePost();
    }
  }

  handleLikePost = () => {
    likePost(this.state.author, this.props.allInfo.post_id);
    // this.setState({likes: this.props.allInfo.post_likes})
    this.setState({ likes: this.state.likes + 1 });
  };

  handleUnlikePost = () => {
    unlikePost(this.state.author, this.props.allInfo.post_id);
    // this.setState({likes: this.props.allInfo.post_likes})
    this.setState({ likes: this.state.likes - 1 });
  };

  render() {
    if (this.state.received < 1) {
      if (this.state.userInfo.liked_posts != undefined) {
        for (let k = 0; k < this.state.userInfo.liked_posts.length; k++) {
          if (this.state.userInfo.liked_posts[k] === this.state.post.post_id) {
            this.setState({ liked: true });
          }
        }
        this.setState({ received: this.state.received + 1 });
        // console.log(this.state.liked);
      }
    }
    // if (this.props.liked != null) {
    // console.log(this.props.liked);
    // }
    return (
      <Card className="root">
        <CardHeader
          avatar={
            <Avatar
              aria-label={this.props.author}
              className="avatar"
              style={{ backgroundColor: "royalblue" }}
            >
              {this.props.author.substring(0, 1).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          titleTypographyProps={{ variant: "subtitle1" }}
          title={this.props.title}
          subheader={this.props.date}
        />
        <CardMedia
          className="media"
          //image = "/static/images/cards/paella.jpg"
          image={this.props.image}
          title="image title"
          // onClick={this.detail}
        />

        {/* <CardMedia
          className="media"
          image = "/static/images/cards/paella.jpg"
          image={this.props.image}
          title="image title"
          onClick={this.detail}
        /> */}
        {/* <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          {this.props.text}
          </Typography>
        </CardContent> */}
        <CardActions disableSpacing className="card_actions">
          <IconButton
            aria-label="add to favorites"
            style={{ padding: "0" }}
            color={this.state.liked == true ? "primary" : "default"}
            //onClick={() => {  }}
            onClick={() => this.handleLikedClick()}
          >
            <FavoriteIcon
            //  onClick = {this.handleLikedClick}
            />
            <p className="likes">{this.state.likes}</p>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button variant="contained" onClick={() => this.props.onClick()}>
            Details
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default PreviewCard;
