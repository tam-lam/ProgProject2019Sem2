import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./detailModal.css";
class DetailModal extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="modal-header" closeButton>
            <Modal.Title className="modal-title">Details</Modal.Title>
          </Modal.Header>
          <Modal.Body closeButton>
            <div className="container-fuild">
              <div className="row">
                <div className="col-lg-7 detailContainer">
                  <h1>detail</h1>
                </div>
                <div className="container-fuild col-lg-5  formContainer">
                  <form>
                    <div className="form-row">
                      <div className="form-group">
                        <label for="bookingDate">Booking date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="bookingDate"
                          placeholder="dd/mm/yyyy"
                        />
                      </div>
                      &nbsp;&nbsp;
                      <div className="form-group">
                        <label for="returnDate">Return date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="returnDate"
                          placeholder="dd/mm/yyyy"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="returnLocation">Return location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="returnLocation"
                        placeholder="Enter a return address"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-success modal-footer shadow-lg">
            <Link
              className="btn btn-block rent-btn bg-success text-light shadow-lg"
              to="/rent"
            >
              Rent now
            </Link>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default DetailModal;
