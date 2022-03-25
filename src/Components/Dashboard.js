import { Col, Row } from "react-bootstrap";
import "./Dashboard.css";
import { NavDropdown } from "react-bootstrap";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Tab } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import SignalCellularAltTwoToneIcon from "@material-ui/icons/SignalCellularAltTwoTone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LayersIcon from "@material-ui/icons/Layers";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import React from "react";
import { useState } from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Dash = () => {
  const [value, setValue] = React.useState("1");

  const [name, setname] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event, newValue) => {
    setname(newValue);
  };
  return (
    <div>
      <br />
      <Col sm={12}>
        <Row>
          <Col sm={2}>
            <div id="live">
              RPF INTELS <SignalCellularAltTwoToneIcon />
            </div>
          </Col>
          <Col sm={8}>
            <Row>
              <div id="dash">
                <Link id="unites" to="/Dashboard">
                  Dashboard |
                </Link>
                &nbsp;
                <Link id="unites" to="/ LiveOpportunities">
                  {" "}
                  LiveOpportunities |
                </Link>
                &nbsp;
                <Link id="unites" to="/ Recommendopp.">
                  {" "}
                  Recommendopp. |
                </Link>
                &nbsp;
                <Link id="unites" to="/TeamingPartners">
                  {" "}
                  TeamingPartners |
                </Link>
                &nbsp;
                <Link id="unites" to="/IncumbentSearch">
                  {" "}
                  IncumbentSearch |
                </Link>
                &nbsp;
                <Link id="unites" to="/Analytics">
                  {" "}
                  Analytics{" "}
                </Link>
              </div>
            </Row>
            <br />
            <Row>
              <div id="dash1">
                <Link id="unites" to="/ Documents ">
                  Documents |
                </Link>
                &nbsp;
                <Link id="unites" to="/  Notifications ">
                  Notifications |
                </Link>
                &nbsp;
                <Link id="unites" to="/ FARLibrary ">
                  FARLibrary |
                </Link>
                &nbsp;
                <Link id="unites" to="/  Events ">
                  {" "}
                  Events |
                </Link>
                &nbsp;
                <Link id="unites" to="/PriceIntelligence ">
                  {" "}
                  PriceIntelligence |
                </Link>
                &nbsp;
                <Link id="unites" to="/  AgencyForecasts ">
                  {" "}
                  AgencyForecasts |
                </Link>
                &nbsp;
                <Link id="unites" to="/  FOIARequests">
                  {" "}
                  FOIAReq.{" "}
                </Link>
                &nbsp;
              </div>
            </Row>
          </Col>
          <Col sm={2}>
            <div id="border">
          <Avatar id="avtar">H</Avatar>
            <NavDropdown
          
              title="Cameron Williamson"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action" id="profile">
                <AccountCircleIcon />
                <Link to="/profile">profile</Link>
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
            </div>
          </Col>
        </Row>
      </Col>
      <br />
      <br />

      <Col sm={12} id="board">
        <Row>
          <Col sm={6}>
            <div id="dashboard"> Dashboard </div>
          </Col>
          <Col sm={6}>
            <div id="search">
              {" "}
              <input type="text" placeholder="Search.." />
              <SearchOutlinedIcon />
            </div>
          </Col>
        </Row>
      </Col>
      <br />
      <br />
      <Col sm={12}>
        <Row>
          <Col sm={8}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor={"primary"}
              centered
            >
              <Tab id="teaming" label="All Alerts" value="1" />
              <Tab id="teaming" label="My Opportunity Alerts" value="2" />
              <Tab id="teaming" label="My Agency Alerts" value="3" />
              <Tab id="teaming" label="My Teaming Alerts" value="4" />
            </Tabs>
            <br />
            <div id="alert">
              <div id="dat"> Alert </div>
              <div id="Date">Date </div>
            </div>
            <br />
            <br />

            <tr>
              <td id="pipe">
                {" "}
                Alerts about Opportunities Added to Pipeline (Bid amendments,
                <br /> Extensions, Q&A posting)
              </td>
              <td id="sep">21 Sep, 2021</td>
            </tr>
            <br />
            <tr>
              <td id="pipe">
                {" "}
                Alerts about Opportunities Added to Pipeline (Bid amendments,
                <br /> Extensions, Q&A posting)
              </td>
              <td id="sep">22 Sep, 2021</td>
            </tr>
            <br />
            <tr>
              <td id="pipe">
                {" "}
                Alerts about Opportunities Added to Pipeline (Bid amendments,
                <br /> Extensions, Q&A posting)
              </td>
              <td id="sep">23 Sep, 2021</td>
            </tr>
            <br />
            <tr>
              <td id="pipe">
                {" "}
                Alerts about Opportunities Added to Pipeline (Bid amendments,
                <br /> Extensions, Q&A posting)
              </td>
              <td id="sep">24 Sep, 2021</td>
            </tr>
            <br />
            <tr>
              <td id="pipe">
                {" "}
                Alerts about Opportunities Added to Pipeline (Bid amendments,
                <br /> Extensions, Q&A posting)
              </td>
              <td id="sep">25 Sep, 2021</td>
            </tr>
            <br />
            <tr>
              <td id="pipe">
                {" "}
                Alerts about Opportunities Added to Pipeline (Bid amendments,
                <br /> Extensions, Q&A posting)
              </td>
              <td id="sep">26 Sep, 2021</td>
            </tr>
            <br />
            <tr>
              <td id="pipe">
                {" "}
                Alerts about Opportunities Added to Pipeline (Bid amendments,
                <br /> Extensions, Q&A posting)
              </td>
              <td id="sep">27 Sep, 2021</td>
            </tr>
            <br />
            <tr>
              <td id="pipe">
                {" "}
                Alerts about Opportunities Added to Pipeline (Bid amendments,
                <br /> Extensions, Q&A posting)
              </td>
              <td id="sep">28 Sep, 2021</td>
            </tr>
          </Col>
          <Col sm={4}>
            <Tabs
              name={name}
              onChange={handleChange1}
              indicatorColor={"primary"}
              centered
            >
              <Tab id="spends" label="Top Agency Spends" value="1" />
            </Tabs>
            <br />
            <tr>
              <td id="agencyname">Agency Name </td>
              <td id="value">$ Value </td>
            </tr>
            <br />
            <tr>
              <td id="meth">Methven Professionals </td>
              <td id="value1">$50,000.00</td>
            </tr>
            <br />
            <tr>
              <td id="meth">Elders Real Estate Sydney City </td>
              <td id="value2">$50,000.00</td>
            </tr>
            <br />
            <tr>
              <td id="meth">Morton Circular Quay</td>
              <td id="value1">&nbsp;$50,000.00</td>
            </tr>
            <br />
            <tr>
              <td id="meth">Barry Plant Real Estate</td>
              <td id="value1">$50,000.00</td>
            </tr>
            <br />
            <tr>
              <td id="meth">First National</td>
              <td id="value4">&nbsp;$50,000.00</td>
            </tr>
            <br />
            <tr>
              <td>Raine & Horne </td>
              <td id="value3">$50,000.00</td>
            </tr>
            <br />
            <tr>
              <td id="meth">Bresic Whitney </td>
              <td id="value6">$50,000.00</td>
            </tr>
            <br />
            <tr>
              <td>LJ Hooker</td>
              <td id="value5">$50,000.00</td>
            </tr>
            <br />
            <tr>
              <td id="meth">Harcourts</td>
              <td id="value5">$50,000.00</td>
            </tr>
            <br />
            <tr>
              <td id="meth"> Century 21 </td>
              <td id="value5">$50,000.00</td>
            </tr>
          </Col>
        </Row>
      </Col>
    </div>
  );
};
export default Dash;
