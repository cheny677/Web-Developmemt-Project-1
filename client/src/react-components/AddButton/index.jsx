import React from "react";
// import AddIcon from "@material-ui/icons/Add";
// import { IconButton, Fab, Popover, Button, Grid } from "@material-ui/core";
import NewPostForm from "../NewPostForm";

// class Post {
//   constructor() {
//     this.image = "";
//     this.title = "";
//     this.content = "";
//   }
// }
// export class AddButton extends React.Component
class AddButton extends React.Component {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // constructor(props) {
  //   super(props);
    // this.state = { posts: [new Post()] };
    // this.handAddPostHolder = this.handAddPostHolder.bind(this);
  // }

  // handAddPostHolder() {
  //   let newPost = new Post();
  //   let lst = this.state.posts;
  //   lst.push(newPost);
  //   this.setState({ posts: lst });
  // }
  render() {
    return (
      // <Grid container direction="column" justify="center" alignItems="center">
      //   {this.state.posts.map(() => (
      //     <Grid item>
      //       <NewPostForm currUser={this.props.curentUser} />
      //     </Grid>
      //   ))}
      // </Grid>
      // <NewPostForm currUser={this.props.curentUser} />
      <NewPostForm />
    );
  }
}
export default AddButton;
