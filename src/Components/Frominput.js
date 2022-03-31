import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import "./From.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import sucess from "../assests/sucess.png";
import sucessgreen from "../assests/sucessgreen.png";

function FormInput({ handleChange, formInputData, handleSubmit }) {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloses = () => {
    setOpen(false);
    setShow(false);
  };

  return (
    <div>
      <div>
        <Dialog open={open} onClose={handleCloses}>
          <DialogContent id="dialog">
            <DialogContentText>
              <div id="sucesslogo">
                <img src={sucessgreen} alt="sucess" />
                <img id="sucess" src={sucess} alt="sucesstik" />
              </div>
              <div id="usersuccess">User is Successfully Add</div>
            </DialogContentText>
          </DialogContent>
          <Button id="continue" onClick={handleCloses}>
            Continue
          </Button>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
      <button id="handle" onClick={handleShow}>
        Add user
      </button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleCloses}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="updates">
            <div className="form-row row">
              <div>
                <label>FullName</label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formInputData.fullName}
                  name="fullName"
                  className="form-control"
                  placeholder="Full Name"
                  id="textfield1"
                />
                <br />
              </div>
              <div>
                <label>Role</label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formInputData.Role}
                  name="Role"
                  className="form-control"
                  placeholder="Role"
                />
                <br />
              </div>
              <div>
                <label>EmailAddress</label>
                <input
                  type="email"
                  onChange={handleChange}
                  value={formInputData.emailAddress}
                  name="emailAddress"
                  className="form-control"
                  placeholder="Email Address"
                />
                <br />
              </div>
              <br />
              <div>
                <label>MobileNumber</label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formInputData.Mobile}
                  name="Mobile"
                  className="form-control"
                  placeholder="Mobile"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClickOpen}>Save</Button>
          <p id="discard" onClick={handleCloses}>
            Discard
          </p>
          <Button variant="primary" onClick={handleSubmit}>
            Add user
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormInput;
