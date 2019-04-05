import React, { Component } from "react";
import caricon from "../images/car-icon.png";

class CarItem extends Component {
  render() {
    return (
      <React.Fragment>
        <li class="list-group-item bg-dark text-white">
          <img src={caricon} className="img-thumbnail float-left rounded" />
          ModelString Year MakeString BodyString
          <br />
          Rego: ABCD1234
          <button
            type="button"
            className="btn btn-outline-light shadow-lg float-right"
          >
            Detail
          </button>
          <br /> 1km $price
        </li>
      </React.Fragment>
    );
  }
}

export default CarItem;
