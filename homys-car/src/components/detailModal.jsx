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
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur aac, vestibulum at eros.asdfadfa
            </p>
          </Modal.Body>
          <Modal.Footer className="bg-success modal-footer shadow-lg">
            <Link
              className="btn btn-block rent-btn bg-success text-light shadow-lg"
              to="/rent"
            >
              Rent Now
            </Link>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default DetailModal;
