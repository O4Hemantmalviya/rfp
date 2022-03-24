import "./Verification.css";
import { Col, Row } from "react-bootstrap";
import Ref from "./Ref";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const Verify = () => {
  return (
    <div>
      <Col sm={12}>
        <Row>
          <Col sm={6}>
            <Ref />
          </Col>
          <Col sm={6}>
            <div id="have">
              Don’t have an account? <a href="#">Sign Up</a>
            </div>
            <div id="ba">
              <ArrowBackIosIcon /> Back
            </div>
            <div id="media">
            <div id="enter">Enter verification code</div>
            <div id="sent">We have just sent a verification code to</div>
            <div id="sents"> Example@gmail.com and +01- 9874563210 </div>
            <div id="gmail">
            <label id="opt"> OTP</label>
            <br />
            <input type="text" id="type" />
            <div id="mobi">
              {" "}
              OTP is send in your Registration email ID & Mobile number
            </div>
            <div id="me">
              <input type="checkbox" />
              &nbsp;&nbsp;Remember me
            </div>
            <button id="go">Let’s Go</button></div></div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};
export default Verify;
