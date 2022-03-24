import "./Login.css";
import { Container, Col, Row } from "react-bootstrap";
import Frame from "../assests/Frame.png";
import ref from "../assests/ref.png";
import intel from "../assests/intel.png";
import vic from "../assests/vic.png";
import coma from "../assests/coma.png";
import SignalCellularAltTwoToneIcon from "@material-ui/icons/SignalCellularAltTwoTone";
import Ref from "./Ref";
import { useState } from "react";

const Loginref = () => {
  const [passwordShown, setpassword] = useState("false");

  const handle = () => {
    setpassword(!passwordShown);
  };
  return (
    <div>
      <Col sm={12}>
        <Row>
          <Col sm={6}>
            <Ref />
          </Col>
          <Col sm={6}>
            <div id="dont">
              Don’t have an account?<a href="#">Sign Up</a>
            </div>
            <div id="log">Log In to RFP Intels</div>
            <div id="your">Enter your email and password below</div>
            <div id="from">
              <label id="email">Email address*</label>
              <br />
              <br />
              <input type="email" id="emails" placeholder="Enter your email" />
              <br />
              <br />
              <label id="pass">
                Password*
                <a id="for" href="#">
                  {" "}
                  Forgot Password?
                </a>
              </label>
              <br />
              <br />
              <div id="show">
                <input
                  type={passwordShown ? "password" : "text"}
                  id="set"
                  placeholder="Enter your password"
                />
                <p id="p" onClick={handle}>
                  show
                </p>
              </div>
              <br />
              <div id="rem">
                {" "}
                <input type="checkbox" />
                &nbsp;&nbsp;Remember me
              </div>
              <br />
              <div>
                <button id="signbtn">Sign In</button>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};
export default Loginref;
