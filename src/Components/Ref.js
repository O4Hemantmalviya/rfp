import "./Ref.css";
import Frame from "../assests/Frame.png";
import { Col } from "react-bootstrap";
import ref from "../assests/ref.png";
import intel from "../assests/intel.png";

import coma from "../assests/coma.png";
import SignalCellularAltTwoToneIcon from "@material-ui/icons/SignalCellularAltTwoTone";

const Ref = () => {
  return (
    <div>
      <Col sm={12}>
        <div id="fcolor">
          <img id="frame" src={Frame} alt="frame" />
        </div>
        <div id="refimg">
          RFP INTELS
          <SignalCellularAltTwoToneIcon />
        </div>
        <div id="coma">
          <img src={coma} alt="coma" />
        </div>
        <div id="amet">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <div id="obi">
          Vincent Obi
          <img id="intel" src={intel} alt="intel" />
        </div>
        <div id="box">
          {" "}
          <img id="ref" src={ref} alt="ref" />
        </div>
      </Col>
    </div>
  );
};
export default Ref;
