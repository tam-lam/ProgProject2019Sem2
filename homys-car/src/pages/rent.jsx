import React, { Component } from "react";
import NavBar from "../components/navbar";

class Rent extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">Summary...</div>
        <div className="btn btn-primary">Checkout with PayPal</div>
      </React.Fragment>
    );
  }
}

export default Rent;
