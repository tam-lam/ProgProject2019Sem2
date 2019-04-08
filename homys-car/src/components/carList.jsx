import React, { Component } from "react";
import "./carList.css";
import CarItem from "./carItem";
class CarList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul class="list-group  my-list-group bg-dark list-group-flush ">
          <CarItem onShowDetail={this.props.onShowDetail} />
          <CarItem onShowDetail={this.props.onShowDetail} />
        </ul>
      </React.Fragment>
    );
  }
}

export default CarList;
