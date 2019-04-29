import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCarsWithDist } from "../store/actions/carActions";
import CarItem from "./CarItem";
import { isEmpty } from "../util/validationHelpers";
import Spinner from "react-bootstrap/Spinner";

class CarList extends Component {
  state = {
    refreshCount: 0
  };
  componentWillMount() {
    this.props.fetchCarsWithDist();
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.doErrorExist !== this.props.doErrorExist &&
      this.state.refreshCount <= 50
    ) {
      this.setState({ refreshCount: this.state.refreshCount + 1 });
      this.props.fetchCarsWithDist();
    }
  }
  displayLoading = () => {
    if (isEmpty(this.props.cars)) {
      console.log("CAR IS EMPTY");
      return (
        <div className="spinner-container text-center text-muted">
          <Spinner
            animation="border"
            variant="success"
            className="loading-spinner slow-spin shadow-lg"
          />
          <h2 className="font-weight-light">Loading...</h2>
          <p>Usual loading time is 0-5 minutes</p>
          <p className="text-left loading-list-container">
            <li>Retriving vehicles</li>
            <li>Calculating distance to vehicles</li>
            <li>Small talk with server</li>
            <li>Taking a nap</li>
          </p>
          <br />
        </div>
      );
    }
  };
  render() {
    const carItems = this.props.cars.map(item => (
      <CarItem
        car={item.car}
        distance={item.distance}
        onShowDetail={this.props.onShowDetail}
      />
    ));

    return (
      <React.Fragment>
        {this.displayLoading()}
        <ul className="list-group  my-list-group bg-dark list-group-flush ">
          {carItems}
        </ul>
      </React.Fragment>
    );
  }
}

CarList.propTypes = {
  fetchCarsWithDist: PropTypes.func.isRequired,
  cars: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cars: state.cars.items,
  doErrorExist: state.cars.doErrorExist
});

export default connect(
  mapStateToProps,
  { fetchCarsWithDist }
)(CarList);
