import "./App.css";
import Login from "./react-components/Login";
import SignUp from "./react-components/SignUpPage/index";
import MainPage from "./react-components/MainPage";
import DetailPage from "./react-components/DetailPage";
import Forgotpassword from "./react-components/ForgotPassword";
import UserProfile from "./react-components/UserProfile";
import AdminDashboard from "./react-components/AdminDashboard";
import AdminPost from "./react-components/AdminPost";
import AdminAllUser from "./react-components/AdminAllUser";
import BackButton from "./react-components/BackButton";
import NewPostForm from "./react-components/NewPostForm";

import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {" "}
            {/* Similar to a switch statement - shows the component depending on the URL path */}
            {/* Each Route below shows a different component depending on the exact path in the URL  */}
            <Route exact path="/" render={() => <Login />} />
            <Route
              exact
              path="/mainPage"
              render={(props) => <MainPage {...props} />}
            />
            <Route
              exact
              path="/detailPage"
              render={(props) => <DetailPage {...props} />}
            />
            <Route exact path="/SignUpPage" render={() => <SignUp />} />
            <Route
              exact
              path="/forgotpassword"
              render={() => <Forgotpassword />}
            />
            <Route
              exact
              path="/userprofile"
              render={(props) => <UserProfile {...props} />}
            />
            <Route exact path="/Login" render={() => <Login />} />
            <Route exact path="/admin" render={() => <AdminPost />} />
            <Route exact path="/adminuser" render={() => <AdminAllUser />} />
            <Route
              exact
              path="/newPostForm"
              render={(props) => <NewPostForm {...props} />}
            />
            <Route exact path="/backButton" render={() => <BackButton />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
