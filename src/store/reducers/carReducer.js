import {
  FETCH_CARS_WITH_DIST,
  SAVE_SELECTED_CAR_IN_STORE,
  SAVE_SELECTED_CAR_DISTANCE_IN_STORE,
  FETCH_ERROR_OCCUR,
  SAVE_CHECKOUT_CAR,
  DELETE_CHECKOUT_CAR,
  REQUEST_CARS_WITH_DIST,
  RECIEVE_CARS_WITH_DIST
} from "../actions/types";

const initialState = {
  items: [],
  selectedCar: {},
  selectedDistance: "",
  doErrorExist: false,
  checkoutCar: JSON.parse(sessionStorage.getItem("checkoutCar")),
  checkoutDistance: sessionStorage.getItem("checkoutDistance"),
  isFetchingCars: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS_WITH_DIST:
      return {
        ...state,
        items: action.payload
      };
    case SAVE_SELECTED_CAR_IN_STORE:
      return {
        ...state,
        selectedCar: action.payload
      };
    case SAVE_SELECTED_CAR_DISTANCE_IN_STORE:
      return {
        ...state,
        selectedCarDistance: action.payload
      };
    case FETCH_ERROR_OCCUR:
      return {
        ...state,
        doErrorExist: action.payload
      };
    case DELETE_CHECKOUT_CAR:
    case SAVE_CHECKOUT_CAR:
      return {
        ...state,
        checkoutCar: JSON.parse(sessionStorage.getItem("checkoutCar")),
        checkoutDistance: sessionStorage.getItem("checkoutDistance")
      };
    case REQUEST_CARS_WITH_DIST:
      return {
        ...state,
        isFetchingCars: true
      };
    case RECIEVE_CARS_WITH_DIST:
      return {
        ...state,
        isFetchingCars: false,
        items: action.payload
      };
    default:
      return state;
  }
}
