import React from "react";
import MainPageButtons from "./../MainPageButtons";
import AdminGridContainer from "./../AdminGridContainer";
import { Box } from "@material-ui/core";
import "./styles.css";
import AdminBar from "../AdminBar";
import NetBackground from "../NetBackground";

class AdminPost extends React.Component {
  render() {
    return (
      <div>
        {/* <NetBackground className="background" /> */}
        {/* <MainPageButtons /> */}

        <AdminBar />
        <Box mt={8}>
          <AdminGridContainer />
        </Box>
      </div>
    );
  }
}

export default AdminPost;