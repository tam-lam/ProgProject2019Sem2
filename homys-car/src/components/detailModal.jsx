import React, { Component } from "react";
import { Modal } from "react-bootstrap/Modal";
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
          <Modal.Body closeButton>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur aac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide} className="btn-dark">
              Close
            </Button>
            <Button
              onClick={() => this.props.history.push("/testRoute")}
              className="btn-dark"
            >
              Rent Now
            </Button>
            <Link className="btn btn-primary" to="/testRoute">
              {" "}
              testRoute
            </Link>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default DetailModal;
