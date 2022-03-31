import "./Profile.css";
import Nav from "./Navbar";
import { Col, Row } from "react-bootstrap";
import {
  Modal,
  
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
const [ record, setRecord ] = useState([ ]);
const [ draw, setdraw] = useState({
      address: " ",
      duns : " ",
      cage:" ",
      pocemail:" ",
      setaside:" ",
      certification:" ",
      naicscodes:" ",
      keywords:" ",
      capability:" ",
      website:" ",
      
  })
  
const handleInput = (e) => {
   const name = e.target.name
  const value = e.target.value
  setdraw({...draw, [name]: value})
};

const handleSubmit = (e) => {
  e.preventDefault()

 
 const  newdata = {...draw }
  setRecord([...record, newdata])
   
}



  const [show, setShow] = useState(false);
  
  const handleClose = () => {
    setShow(false);
    
  }
  const handleShow = () => setShow(true);
  return (
    <div>
      <Col sm={12}>
        <Row>
          <Nav />
        </Row>
      </Col>
      <Col sm={12}>
        <Row>
          <div id="probtn">
            <div id="profilebtn">
              <Link to="/profile">
                <button type="button" id="profilesbtn">
                  Profile
                </button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/users">
                <button type="button"  id="profilesbtn">
                  Users
                </button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/subscription">
                <button type="button"  id="profilesbtn">
                  subscription
                </button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/settings">
                <button type="button"  id="profilesbtn" >
                  settings
                </button>
              </Link>
              &nbsp;&nbsp;
            </div>
          </div>
        </Row>
      </Col>
      <br />
      <Col sm={12}>
        <Row>
          <div id="disney">
            <div id="walt">The Walt Disney Company</div>
            <div id="edit">
              {" "}
              <button
                id="primary"
                type="button"
                class="btn-primary"
                onClick={handleShow}
              >
                Edit
              </button>
            </div>
          </div>
          <div>
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={show}
              // onHide={handleClose}
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>The Walt Disney Company</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div id="updates">
                <form action="" onSubmit={handleSubmit}>
                  <label id="labels1"> Address :</label>
                  <input id="input1" type="text" 
                   onChange={handleInput}
                   value={draw.address}
                    name="address" />
                  <br/>
                  <label id="labels1">DUNS :</label>
                  <input id="input2" type="text" 
                   onChange={handleInput}
                   value={draw.duns}
                   name="duns"/>
                  <br />
                  <label id="labels1">CAGE :</label>
                  <input id="input2" type="text"
                    onChange={handleInput}
                    value={draw.cage}
                    name="cage"
                  />
                  <br />
                  <label id="labels1">POCEmail :</label>
                  <input id="input3" type="text" 
                    onChange={handleInput}
                    value={draw.pocemail}
                    name="pocemail"
                  />
                  <br />
                  <label id="labels1">Set-Aside :</label>
                  <input id="input3" type="text" 
                   onChange={handleInput}
                   value={draw.setaside}
                   name="setaside"
                  />
                  <br />
                  <label id="labels1">Certifications :</label>
                  <input id="input4" type="text"
                   onChange={handleInput}
                   value={draw.certification}
                   name="certification"
                  />
                  <br />
                  <label id="labels1">NAICSCodes :</label>
                  <input id="input5" type="text"
                  
                  onChange={handleInput}
                  value={draw.naicscodes}
                  name="naicscodes"/>
                  <br />
                  <label id="labels1">Keywords :</label>
                  <input id="input6" type="text" 
                   onChange={handleInput}
                   value={draw.keywords}
                   name="keywords"
                  />
                  <br />
                  <label id="labels1">CapabilityBriefing:</label>
                  <input id="input7" type="text" 
                   onChange={handleInput}
                   value={draw.capability}
                   name="capability"
                  />
                  <br />
                  <label id="labels1">Website :</label>
                  <input id="input8" type="text" 
                   onChange={handleInput}
                   value={draw.website}
                   name="website"
                  />
                  
                  </form>
                  <br />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <p id="discard" onClick={handleClose}>
                  Discard Changes
                </p>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Row>
        <Row>
       
            
         
          <div id="update">
            <label id="label1"> Address :</label>
            <input id="i1" type="text"  value={draw.address} />
            <br />
            <br />
            <label id="label1">DUNS :</label>
            <input id="i2" type="text"  value={draw.duns}/>
            <br />
            <br />
            <label id="label1">CAGE :</label>
            <input id="i2" type="text"   value={draw.cage} />
            <br />
            <br />
            <label id="label1">POCEmail :</label>
            <input id="i3" type="text"  value={draw.pocemail}/>
            <br />
            <br />
            <label id="label1">Set-Aside :</label>
            <input id="i3" type="text"     value={draw.setaside} />
            <br />
            <br />
            <label id="label1">CorporateCertifications :</label>
            <input id="i4" type="text"     value={draw.certification} />
            <br />
            <br />
            <label id="label1">NAICSCodes :</label>
            <input id="i5" type="text"  value={draw.naicscodes}/>
            <br />
            <br />
            <label id="label1">Keywords :</label>
            <input id="i6" type="text" value={draw.keywords}/>
            <br />
            <br />
            <label id="label1">CapabilityBriefing :</label>
            <input id="i7" type="text"   value={draw.capability}/>
            <br />
            <br />
            <label id="label1">Website :</label>
            <input id="i8" type="text"  value={draw.website} />
            <br />
            <br />
          </div>
 

        </Row>
      </Col>
    </div>
  );
};
export default Profile;
