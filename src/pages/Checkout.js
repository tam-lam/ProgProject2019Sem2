import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import SummaryContainer from "../components/SummaryContainer";
import SimplePageTitle from "../components/SimplePageTitle";
class Checkout extends Component {
  state = {
    car: this.props.location.state,
    isUserSignedIn: false
  };
  // signinOnClick = () => {
  //   this.setState({ isUserSignedIn: true });
  // };
  displayTitle = () => {
    var subtitle =
      this.state.car == null
        ? "Please select a vehicle before checkout."
        : !this.state.isUserSignedIn
        ? "Please authenticate before checkout."
        : "Simply checkout and be on your way!";
    return <SimplePageTitle title="Checkout" subtitle={subtitle} />;
  };
  displayAuthenticationBtns = () => {
    if (!this.state.isUserSignedIn && this.state.car != null) {
      return (
        <React.Fragment>
          <div className="container login-container rounded text-center">
            <Link
              className="btn btn-outline-light btn-lg auth-btn"
              to={{ pathname: "/signin" }}
            >
              Sign In
            </Link>
            <Link
              className="btn btn-outline-light btn-lg auth-btn"
              to={{ pathname: "/signup" }}
            >
              Sign up
            </Link>
          </div>
        </React.Fragment>
      );
    }
  };
  displayCheckout = () => {
    if (this.state.car != null) {
      return (
        <div className="container checkout-container shadow-lg rounded">
          <div className="row">
            <div className="price-container col-lg-5 bg-dark rounded-left text-center text-light">
              <h1 className="deposit-amount">PayPal</h1>
              <h3 className="deposit-label ">Deposit</h3>
              <br />
              We hold on to payment information to prevent "one way trips".
              Please Signin to checkout
              <br />
              {/* Hard coded time , need to make it real */}
              {/* Please signin to book */}
              {this.displayPayPalBtn()}
            </div>
            <SummaryContainer car={this.state.car} />
          </div>
        </div>
      );
    }
  };
  displayPayPalBtn = () => {
    if (this.state.isUserSignedIn) {
      return (
        <button className="btn btn-primary btn-lg shadow-lg checkout-btn">
          Check out with PayPal
        </button>
      );
    }
  };
  render() {
    return (
      <React.Fragment className="text-center">
        <NavBar />
        {this.displayTitle()}
        {this.displayAuthenticationBtns()}
        {this.displayCheckout()}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Checkout;