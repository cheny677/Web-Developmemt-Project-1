import React, { Component } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Copyright from "../Copyright";
import Clouds from "../../backgroundPics/clouds.jpg";
// import "./styles.css";
import {
  Avatar,
  CssBaseline,
  Button,
  Grid,
  Typography,
  Link,
  ThemeProvider,
  TextField,
  withStyles,
} from "@material-ui/core";
import theme from "../themes/theme.jsx";
import {signUp} from "../../actions/user"

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${Clouds})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "1100px",
  },
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPW: "",
    emailError: false,
    emailHelperText: '',
    emptyError: false,
    emptyHelperText: '',
    confirmError: false,
    confirmHelperText: ''
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        {/* <Cloud3DBg /> */}
        {/* <AnimatedBackground /> */}

        <ThemeProvider theme={theme}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={4}>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        error={this.state.emptyError}
                        helperText={this.state.emptyHelperText}
                        autoFocus
                        onChange={(event) => {
                          const { value } = event.target;
                          this.setState({ firstName: value });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        error={this.state.emptyError}
                        helperText={this.state.emptyHelperText}
                        autoComplete="lname"
                        onChange={(event) => {
                          const { value } = event.target;
                          this.setState({ lastName: value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        error={this.state.emptyError}
                        helperText={this.state.emptyHelperText}
                        label="Username"
                        name="username"
                        onChange={(event) => {
                          const { value } = event.target;
                          this.setState({ username: value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        error={this.state.emailError || this.state.emptyError}
                        helperText={this.state.emailHelperText}
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(event) => {
                          const { value } = event.target;
                          this.setState({ email: value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        error={this.state.emptyError}
                        helperText={this.state.emptyHelperText}
                        id="password"
                        autoComplete="current-password"
                        onChange={(event) => {
                          const { value } = event.target;
                          this.setState({ password: value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="confirm password"
                        label="confirm password"
                        type="password"
                        id="confirmPW"
                        error={this.state.confirmError}
                        helperText={this.state.confirmHelperText}
                        onChange={(event) => {
                          const { value } = event.target;
                          this.setState({ confirmPW: value });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {/* Sign Up Button */}
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => signUp(this, classes)}
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>

                  {/* already have an account */}
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link href="/Login" variant="body2" color="primary">
                        <Button color="secondary">
                          Already have an account? Sign in
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </form>
                <Copyright />
              </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
