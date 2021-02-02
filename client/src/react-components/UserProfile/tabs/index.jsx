import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs, Paper } from "@material-ui/core";
import BrowsingHistory from "./browsingHistory";
import PostHistory from "./postHistory";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="primary"
        centered
      >
        <Tab label="Browsing History" />
        <Tab label="My Posts" />
      </Tabs>
      {selectedTab === 0 && <BrowsingHistory />}
      {selectedTab === 1 && <PostHistory />}
    </Paper>
  );
}
