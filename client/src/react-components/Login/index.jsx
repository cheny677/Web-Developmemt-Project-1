import React from "react";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import welcome from "./static/welcomepic.svg";
import { green } from "@material-ui/core/colors";
import "./styles.css";
import AnimatedBackground from "../AnimatedBackground";
import { Link, Redirect } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import { updateLoginForm, login } from "../../actions/user";
// import { Redirect } from "react-router";
// import MainPage from "./../MainPage";
import AdminPost from "./../AdminPost";
/* Component for the Home page */
class Login extends React.Component {
  state = {
    username: "",
    password: "",
    error: false,
    helperText: "",
    showpw: false,
    visibility: false,
    redirect: null,
  };

  handleVisibility = () => {
    this.setState({ showpw: !this.state.showpw });
    this.setState({ visibility: !this.state.visibility });
  };
  render() {
    // check if we need to redirect to main page or admin page

    if (this.state.redirect === "/mainPage") {
      return (
        <Redirect
          to={{
            pathname: "/mainPage",
            state: {
              curentUser: this.state.username,
            },
          }}
        />
      );
    }
    if (this.state.redirect === "/admin") {
      // return <AdminPost curentUser={this.state.username} />;
      return (
        <Redirect
          to={{
            pathname: "/admin",
            state: {
              curentUser: this.state.username,
            },
          }}
        />
      );
    }
    // regular code
    const { app } = this.props;
    return (
      <div className="background">
        <AnimatedBackground />
        <div className="LoginBox">
          <img
            className="mt-1"
            src={welcome}
            style={{ width: "400px", height: "170px" }}
          />
          <TextField
            label="Username"
            margin="normal"
            className="username"
            error={this.state.error}
            helperText={this.state.helperText}
            name="username"
            onChange={(e) => updateLoginForm(this, e.target)}
          />
          <TextField
            label="Password"
            margin="normal"
            className="password"
            error={this.state.error}
            helperText={this.state.helperText}
            name="password"
            onChange={(e) => updateLoginForm(this, e.target)}
            type={this.state.showpw ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={this.handleVisibility}>
                    {this.state.visibility ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div className="signup">
            <Link to={"/SignUpPage"}>
              <Button>Sign Up Now</Button>
            </Link>
          </div>

          <div className="forgotpw">
            <Link to={"/forgotpassword"}>
              <Button>Forgot Password?</Button>
            </Link>
          </div>

          <Button
            variant="contained"
            className="login"
            onClick={() => login(this, app)}
            style={{ backgroundColor: green[500] }}
          >
            Login
          </Button>

          <div className="facebook">
            <IconButton
              color="primary"
              onClick={() => window.open("https://www.facebook.com/")}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
          </div>
          <div className="ins">
            <IconButton
              color="secondary"
              onClick={() => window.open("https://www.instagram.com/")}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </div>
          <div className="twitter">
            <IconButton
              color="primary"
              onClick={() => window.open("https://twitter.com/")}
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
