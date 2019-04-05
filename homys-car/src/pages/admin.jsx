import React, { Component } from "react";
import NavBar from "../components/navbar";
import "./admin.css";
import Footer from "../components/footer";
class Admin extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>Admin page content goes here</div>{" "}
      </React.Fragment>
    );
  }
}

export default Admin;
