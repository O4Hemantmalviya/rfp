import "./Login.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              Don’t have an account?<Link to="/signup">Signup</Link>
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
              
                <Link id="for" to="/forget">
                  {" "}
                  Forgot Password?
                  </Link>
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
               <Link to="/dash"> <button id="signbtn">Sign In</button></Link>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};
export default Loginref;
