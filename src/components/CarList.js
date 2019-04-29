import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCarsWithDist } from "../store/actions/carActions";
import CarItem from "./CarItem";

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
