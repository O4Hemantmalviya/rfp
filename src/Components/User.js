import './User.css'
import Nav from './Navbar'
import {Col,Row} from  'react-bootstrap'
import { Link } from 'react-router-dom'
import Pra from './Practice'
const User=()=>{
    return(
        <div>
         <Col sm={12}>
             <Row>
              <Nav/>
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
      <Col sm={12}>
        <Row>
          <div>
          <Pra/>
          </div>
         
        </Row>
        </Col>
        </div>
    )
    
}
export default User