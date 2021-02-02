import React from "react";
import { Paper, Button, Grid, Typography, TextField } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Save, Send, AddCircleOutline } from "@material-ui/icons";
import "./styles.css";
import tileData from "../GridContainer/tileData";
import { addImage } from "../../actions/post";
import { postPost } from "../../actions/post";
import appBar from "./../PrimarySearchAppBar";
import BackButton from "./../BackButton";
class NewPostForm extends React.Component {
  // state = {
  //   images: [""],
  //   title: "",
  //   text: "",
  //   author: "user",
  //   message: "",
  //   helperText: "Share your story with others💖",
  // };
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      title: "",
      text: "",
      author: this.props.location.state.curentUser,
      message: "",
      helperText: "Share your story with others💖",
      dummyLst: [""],
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  // handleSend = () => {
  //   tileData.push(this.state);
  //   console.log("SEND");
  // };
  onFileChange = (e) => {
    let lst = this.state.images;
    lst.push(e.target.files[0]);
    this.setState({ imgages: lst });
    // console.log(this.state.images);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "" || this.state.title === "") {
      {
        this.setState({
          helperText: "Please enter title and description",
        });
      }
    } else {
      // console.log(this.state);
      // postPost(e.target, this);
      postPost(this);
    }
  };

  addMoreImage() {
    let curr = this.state.dummyLst;
    curr.push("");
    this.setState({ dummyLst: curr });
  }
  render() {
    return (
      <div>
        <BackButton currUser={this.state.author} />
        <Paper style={{ margin: "10px" }}>
          <Grid container direction="column" justify="center" spacing={2}>
            <Grid item>
              <Typography color="secondary">{this.state.helperText}</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => this.addMoreImage()}
              >
                Add more image
              </Button>
            </Grid>

            <Grid item>
              <Grid container direction="row" spacing={1}>
                <Grid item>
                  <form
                    className="image-form"
                    onSubmit={(e) => this.handleSubmit(e)}
                  >
                    {/* <div class="image-form__field">
                      <label>Image:</label>
                      <input name="image" type="file" />
                    </div> */}
                    {this.state.dummyLst.map(() => (
                      <div class="image-form__field">
                        <label>Image:</label>
                        <input
                          name="image"
                          type="file"
                          onChange={this.onFileChange}
                        />
                      </div>
                    ))}
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container direction="row" spacing={1}>
                          <Typography>Title:</Typography>
                          <TextField
                            name="title"
                            label="Title"
                            variant="outlined"
                            onChange={this.handleInputChange}
                            size="small"
                          ></TextField>
                        </Grid>
                      </Grid>

                      <Grid item>
                        <Grid container direction="row" spacing={1}>
                          <Typography>Content:</Typography>
                          <TextField
                            name="text"
                            label="Write something"
                            variant="outlined"
                            onChange={this.handleInputChange}
                            size="small"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          spacing={1}
                        >
                          <Grid item>
                            <Button
                              variant="contained"
                              color="primary"
                              type="submit"
                              className="image-form__submit-button"
                            >
                              Upload
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default NewPostForm;
