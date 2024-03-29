import { Col, Row } from "react-bootstrap";
import Frame from "../assests/Frame.png";
import ref from "../assests/ref.png";
import intel from "../assests/intel.png";
import coma from "../assests/coma.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "./Forget.css";
import { Link } from "react-router-dom";

const For = () => {
  return (
    <div>
      <Col sm={12}>
        <Row>
          <Col sm={6}>
            <div id="fcolo">
              <img id="fra" src={Frame} alt="frame" />
            </div>

            <div id="com">
              <img src={coma} alt="coma" />
            </div>
            <div id="mollit">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
            <div id="vin">
              Vincent Obi
              <img id="int" src={intel} alt="intels" />
            </div>
            <div id="boxes">
              {" "}
              <img id="re" src={ref} alt="ref" />
            </div>
          </Col>
          <Col sm={6}>
            <div id="icon">
              <ArrowBackIosIcon />
            <Link to="/">Back</Link>
            </div>
            <div id="ullamco">
              <div id="forgetpass">Forgot Password?</div>
              <div id="des">
                Amet minim mollit non deserunt ullamco est sit
                <br />
                aliqua dolor do amet sint.
              </div>
              <label id="emailaddress"> Email Address*</label>
              <br />
              <input type="text" id="placeholder" placeholder="Enter Eamil" />
              <div>
                <button id="continue"> Continue</button>
              </div>
              <div id="safely">
                <LockOutlinedIcon fontSize="Small" />
                Your Info is safely secured
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};
export default For;
