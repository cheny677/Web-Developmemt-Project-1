import React from "react";
import "./styles.css";
import Copyright from "../Copyright";

// import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

class Footer extends React.Component {
  render() {
    // console.log(this.props.curentUser);
    return (
        <div className = "main_footer">
            <div className = "footer_container">
                <div className = "row">

                    <div className = "column">
                        <h3>The BluBook</h3>
                    </div>

                    <div className = "column">
                        <h4>Product</h4>
                        <ul className = "list">
                            <li>Features</li>
                            <li>Integration</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div className = "column">
                        <h4>Company</h4>
                        <ul className = "list">
                            <li>About Us</li>
                            <li>Term of Service</li>
                        </ul>
                    </div>

                    <div className = "column">
                        <h4>Support</h4>
                        <ul className = "list">
                            <li>Contact Us</li>
                            <li>Support</li>
                            <li>Guides</li>
                        </ul>
                    </div>

                </div>
            </div>

            <hr/>

            <div className="row">
                <Copyright/>
            </div>
        </div>



    );
  }
}



export default Footer;
