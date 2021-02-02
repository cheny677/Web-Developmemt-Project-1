// Functions to help with user actions.

// Send a request to check if a user is logged in through the session cookie
// import SignUpAlert from "../react-components/SignUpAlert";
// import { Redirect } from "react-router";

export const checkSession = (app) => {
  const url = "/users/check-session";

  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((json) => {
      if (json && json.currentUser) {
        app.setState({ currentUser: json.currentUser });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// A functon to update the login form state
export const updateLoginForm = (loginComp, field) => {
  const value = field.value;
  const name = field.name;

  loginComp.setState({
    [name]: value,
  });
};

// A function to send a POST request with the user to be logged in
export const login = (loginComp, app) => {
  // Create our request constructor with all the parameters we need
  const userState = {
    username: loginComp.state.username,
    password: loginComp.state.password,
  };

  if (userState.username === "") {
    loginComp.setState({ error: true });
    loginComp.setState({ helperText: "Please enter your username" });
  } else if (userState.password === "") {
    loginComp.setState({ error: true });
    loginComp.setState({ helperText: "Please enter your password" });
  } else {
    const request = new Request("/users/login", {
      method: "post",
      body: JSON.stringify(userState),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    // Send the request with fetch()
    fetch(request)
      .then((res) => {
        if (res.status === 200) {
          if (userState.username === "admin") {
            loginComp.setState({ redirect: "/admin" });
          } else {
            loginComp.setState({ redirect: "/mainPage" });
          }
          return res.json();
        }
      })
      .then((json) => {
        if (json.currentUser !== undefined) {
          loginComp.setState({ currentUser: json.currentUser });
        }
      })
      .catch((error) => {
        loginComp.setState({ error: true });
        loginComp.setState({ helperText: "Incorrect Username Or Password" });
        console.log(error);
      });
  }
};

function resetError(signUpComp) {
  signUpComp.setState({ emptyError: false });
  signUpComp.setState({ confirmError: false });
  signUpComp.setState({ emailError: false });
  signUpComp.setState({ emailHelperText: "" });
  signUpComp.setState({ emptyHelperText: "" });
  signUpComp.setState({ confirmHelperText: "" });
}

export const signUp = (signUpComp, app) => {
  // Create our request constructor with all the parameters we need
  resetError(signUpComp);
  if (
    signUpComp.state.password === "" ||
    signUpComp.state.fristName === "" ||
    signUpComp.state.lastName === "" ||
    signUpComp.state.username === "" ||
    signUpComp.state.email === ""
  ) {
    signUpComp.setState({ emptyError: true });
    signUpComp.setState({ emptyHelperText: "Please fill required field" });
    signUpComp.setState({ emailHelperText: "Please fill required field" });
  } else if (signUpComp.state.password !== signUpComp.state.confirmPW) {
    signUpComp.setState({ confirmError: true });
    signUpComp.setState({
      confirmHelperText: "Those passwords didn't match. Try again.",
    });
  } else {
    resetError(signUpComp);
    const request = new Request("/api/users", {
      method: "post",
      body: JSON.stringify(signUpComp.state),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    // Send the request with fetch()
    fetch(request)
      .then(function (res) {
        if (res.status === 200) {
          window.location.replace("/");
          return res.json();
        }
      })
      .catch((error) => {
        console.log(error.errors);
      });
  }
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
  const url = "/users/logout";

  fetch(url)
    .then((res) => {
      app.setState({
        currentUser: null,
        message: { type: "", body: "" },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// A function to send a GET request to logout the all info of current user
export const getInfo = (user, username) => {
  // console.log("getInfo in actions");
  // console.log(username);
  const url = `/users/${username}/info`;

  const request = new Request(url, {
    method: "get",
  });

  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((json) => {
      // the resolved promise with the JSON body
      // console.log(json.posts);
      user.setState({ userInfo: json.user });
    })
    .catch((error) => {
      console.log(error);
    });
};
