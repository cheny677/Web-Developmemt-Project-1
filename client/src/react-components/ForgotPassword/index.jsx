import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Avatar,
  CssBaseline,
  Button,
  Grid,
  Typography,
  ThemeProvider,
  TextField,
  withStyles,
  Box
} from "@material-ui/core";
import theme from "../themes/theme.jsx";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
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

class Forgotpassword extends React.Component {
    render() {
        const { classes } = this.props;
      return (
        <div>
        <div>
         <ThemeProvider theme={theme}>
        
        <Container
          component="main"
          maxWidth="xs"
          style={{
            borderRadius: "10px",
            flex: 1,
            position: "relative",
          }}
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Recover Password
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="username"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Send Recovery Email
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to={"/"}>
                    Don't have an account? Sign up here
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
          </Box>
        </Container>
      </ThemeProvider>
      </div>
      </div>
    

        
      );
    }
  }
  
  export default withStyles(styles)(Forgotpassword);