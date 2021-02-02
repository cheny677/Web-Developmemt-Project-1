import React from "react";
import "./styles.css";
import AddButton from "../AddButton";

class MainPageButtons extends React.Component {
  render() {
    return (
      <div className="mainbuttons">
        <div className="Add">
          <AddButton />
        </div>
      </div>
    );
  }
}

export default MainPageButtons;
