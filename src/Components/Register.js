import { Col, Row } from "react-bootstrap";
import Frame from "../assests/Frame.png";
import ref from "../assests/ref.png";
import intel from "../assests/intel.png";
import coma from "../assests/coma.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [confrom, setConfrom] = useState("false");
  const [Reconfrom, setReconfrom] = useState("false");

  const handle2 = () => {
    setConfrom(!confrom);
  };
  const handle3 = () => {
    setReconfrom(!Reconfrom);
  };
  return (
    <div>
      <Col sm={12}>
        <Row>
          <Col sm={6}>
            <div id="fcolor">
              <img id="frame" src={Frame} alt="frame" />
            </div>

            <div id="coma">
              <img src={coma} alt="coma"/>
            </div>
            <div id="amet">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
            <div id="obi">
              Vincent Obi
              <img id="intel" src={intel} alt="intels" />
            </div>
            <div id="box">
              {" "}
              <img id="ref" src={ref} alt="box" />
            </div>
          </Col>
          <Col sm={6}>
            <div id="already">
              {" "}
              Already have an account? <Link to="/">Signin</Link>
            </div>
            <div id="arrow">
              <ArrowBackIosIcon />
              Back
            </div>
            <div id="regi"> Register</div>
            <div id="mini">
              Amet minim mollit non deserunt ullamco est sit <br />
              aliqua dolor do amet sint
            </div>
            <div id="regifrom">
              <label id="name">First Name*</label>
              <br />
              <input id="place" type="text" placeholder="Enter first name" />
              <br />
              <label id="name">Last Name*</label>
              <br />
              <input id="place" type="text" placeholder="Enter last name" />
              <br />
              <label id="name">Company Name*</label>
              <br />
              <input id="place" type="text" placeholder="Enter Company name" />
              <br />
              <label id="name">Email Address* </label>
              <br />
              <input id="place" type="text" placeholder="Enter email " />
              <br />
              <label id="name"> Password*</label>
              <br />
              <div id="cshow">
                <input
                  id="cplace"
                  type={confrom ? "password" : "text"}
                  placeholder="Enter password "
                />
                <p id="cp" onClick={handle2}>
                  show
                </p>
              </div>
              <label id="name">Re-enter password*</label>
              <br />
              <div id="reshow">
                <input
                  id="Replace"
                  type={Reconfrom ? "password" : "text"}
                  placeholder="Re-enter password"
                />
                <p id="Reset" onClick={handle3}>
                  show
                </p>
              </div>
              <br />
              <div id="name">
                <input type="checkbox" />
                &nbsp;I agree to terms & conditions
              </div>
              <div>
                <button id="btnreg"><Link id="btncolor" to="/verify">Register account</Link></button>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};
export default Register;
