import './Subcription.css'
import React from 'react'
import { Col ,Row} from 'react-bootstrap'
import Nav from './Navbar'
import { Link } from 'react-router-dom'

const Subcription=()=> {
  return (
    <div>
 <Col sm={12}>
             <Row>
              <Nav/>
             </Row>
          </Col><br/>
          <div id="pagebackground">
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
      
      <div id="rowborder">
<Col sm={12}>
    <Row >
        
        <Col sm={4} >
            <div id="background">
        <div id="plan">
            <div id="linear"></div>
         <div id="free">Free Plan</div>
         </div>
         <div id="life">$0.00 /Lifetime</div>
         <div>
             <li>75% conception rate</li>
             <li>Increase feed</li>
             <li>Lower antibiotic usage</li>
             <li>efficiency by 7%</li>
             <li>Ruminating while laying</li>
             <li>Efficiency by 7%</li>
             <li>Increase while laying</li>
             <button id="upgrade">Upgrade</button>
         </div>
         </div>
        </Col>
        <Col sm={4}>
        <div id="background">
        <div id="plan">
            <div id="linear1"></div>
         <div id="free">1Doller Hero</div>
         </div>
         <div id="life">$0.00 /Lifetime</div>
         <div>
             <li>75% conception rate</li>
             <li>Increase feed</li>
             <li>Lower antibiotic usage</li>
             <li>efficiency by 7%</li>
             <li>Ruminating while laying</li>
             <li>Efficiency by 7%</li>
             <li>Increase while laying</li>
             <button id="upgrade2">Upgrade</button>
         </div>
         </div>
        </Col>
        <Col sm={4}>
        <div id="background">
        <div id="plan">
            <div id="linear"></div>
         <div id="free">Business</div>
         </div>
         <div id="life">$0.00 /Lifetime</div>
         <div>
             <li>75% conception rate</li>
             <li>Increase feed</li>
             <li>Lower antibiotic usage</li>
             <li>efficiency by 7%</li>
             <li>Ruminating while laying</li>
             <li>Efficiency by 7%</li>
             <li>Increase while laying</li>
             <button id="upgrade">Upgrade</button>
         </div>
         </div>
        </Col>
        
    </Row>
</Col>
</div>
</div>
    </div>
  )
}



export default Subcription
