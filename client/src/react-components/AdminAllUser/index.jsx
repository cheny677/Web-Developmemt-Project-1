import React from "react";
import AdminGridContainer from "./../AdminGridContainer";
import { Box } from "@material-ui/core";
import "./styles.css";
import AdminBar from "../AdminBar";
import AdminUserTable from "../AdminUserTable";

class AdminAllUser extends React.Component {
  render() {
    return (
      <div>
        <AdminBar />
        <div class="usertable">
            <AdminUserTable />
        </div>
      </div>
    );
  }
}

export default AdminAllUser;