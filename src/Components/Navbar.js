import "./Navbar.css";
import SignalCellularAltTwoToneIcon from "@material-ui/icons/SignalCellularAltTwoTone";
import { Col, Row } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LayersIcon from "@material-ui/icons/Layers";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
const Profile = () => {
  return (
    <div>
      <Col sm={12}>
        <br />
        <Row>
          <Col sm={2}>
            <div id="cell">
              {" "}
              RPF INTELS <SignalCellularAltTwoToneIcon />
            </div>
          </Col>
          <Col sm={8}>
            <Row>
              <div id="analytic">
                <Link id="noti" to="/Dashboard">
                  Dashboard
                </Link>
                &nbsp;
                <Link id="noti" to="/ LiveOpportunities">
                  {" "}
                  LiveOpportunities{" "}
                </Link>
                &nbsp;
                <Link id="noti" to="/ Recommendopp.">
                  {" "}
                  Recommendopp.{" "}
                </Link>
                &nbsp;
                <Link id="noti" to="/TeamingPartners">
                  {" "}
                  TeamingPartners{" "}
                </Link>
                &nbsp;
                <Link id="noti" to="/IncumbentSearch">
                  {" "}
                  IncumbentSearch{" "}
                </Link>
                &nbsp;
                <Link id="noti" to="/Analytics">
                  {" "}
                  Analytics{" "}
                </Link>
              </div>
            </Row>
            <br />
            <Row>
              <div id="analytic">
                <Link id="noti" to="/ Documents ">
                  {" "}
                  Documents{" "}
                </Link>
                &nbsp;
                <Link id="noti" to="/  Notifications ">
                  {" "}
                  Notifications{" "}
                </Link>
                &nbsp;
                <Link id="noti" to="/ FARLibrary ">
                  {" "}
                  FARLibrary{" "}
                </Link>
                &nbsp;
                <Link id="noti" to="/  Events ">
                  {" "}
                  Events{" "}
                </Link>
                &nbsp;
                <Link id="noti" to="/PriceIntelligence ">
                  {" "}
                  PriceIntelligence{" "}
                </Link>
                &nbsp;
                <Link id="noti" to="/  AgencyForecasts ">
                  {" "}
                  AgencyForecasts{" "}
                </Link>
                &nbsp;
                <Link id="noti" to="/  FOIARequests">
                  {" "}
                  FOIARequests
                </Link>
                &nbsp;
              </div>
            </Row>
          </Col>
          <Col sm={2}>
            <Avatar id="avtars">H</Avatar>
            <NavDropdown id="drop">
              <NavDropdown.Item href="#action" id="profile">
                <AccountCircleIcon />
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action" id="profile">
                {" "}
                <LayersIcon />
                Users
              </NavDropdown.Item>
              <NavDropdown.Item href="#action" id="profile">
                <SubscriptionsIcon />
                Subscription
              </NavDropdown.Item>
              <NavDropdown.Item href="#action " id="profile">
                <SettingsApplicationsIcon />
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action" id="profile">
                <ExitToAppRoundedIcon />
                Logout{" "}
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Row>
      </Col>
      <Col sm={12}>
        <Row>
          <div id="probtn">
            <div id="profilebtn">
              <Link to="/profile">
                <button type="button" class="btn btn-outline-primary">
                  profile
                </button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/users">
                <button type="button" class="btn btn-outline-primary">
                  Users
                </button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/subscription">
                <button type="button" class="btn btn-outline-primary">
                  subscription
                </button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/settings">
                <button type="button" class="btn btn-outline-primary">
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
            <div id="edit"> <button id="primary" type="button" class="btn-primary">
                  Edit
                </button></div>
          </div>
        </Row>
        <Row>
          <div id="update">
           <label id="label1"> Address :</label> 
            <input id="i1" type="text"/><br/><br/>
            <label id="label1">DUNS   :</label> 
             <input id="i2" type="text"/><br/><br/>
             <label id="label1">CAGE    :</label>
             <input id="i2" type="text"/><br/><br/>
             <label id="label1">POCEmail  :</label>
             <input id="i3" type="text"/><br/><br/> 
             <label id="label1">Set-Aside  :</label>
             <input id="i3" type="text"/><br/><br/>
              <label id="label1">CorporateCertifications  :</label>
              <input id="i4" type="text"/><br/><br/>
               <label id="label1">NAICSCodes :</label>
               <input id="i5" type="text"/><br/><br/>
                <label id="label1">Keywords :</label>
               <input id="i6" type="text"/><br/><br/>
               <label id="label1">CapabilityBriefing :</label>
               <input id="i7" type="text"/><br/><br/>
               <label id="label1">Website  :</label>
               <input id="i8" type="text"/><br/><br/>
          </div>
        </Row>
      </Col>
    </div>
  );
};
export default Profile;
