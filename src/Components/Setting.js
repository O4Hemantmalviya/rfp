import {Col,Row,Toast} from 'react-bootstrap'
import './Setting.css'
import Nav from './Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'




const Setting=()=>{
  const [show, setShow] = useState(false);
    return(
        <div>
            <Col sm={12}>
             <Row>
              <Nav/>
             </Row>
          </Col><br/>
          
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
            <div id="mainborder"> 
         <Col sm={12}>
             <Row >
                 <div id="Role">
                 <div id="administrator">Role: Administrator</div>
                <div id="changebtn"><button id="changepass" onClick={() => setShow(true)}>change password</button>  </div>
                <Toast onClose={() => setShow(false)} show={show} >
                <Toast.Body>
                <label>Enter existing password</label><br/>
                <input type="text"/><br/>
                <label>Enter New Password</label><br/>
                <input type="text"/><br/>
                <label>Re-Enter New Password</label><br/>
                <input type="text"/><br/>
                <div>Discard<button>Save</button></div>
                </Toast.Body>
                 </Toast>
              
              
                 </div>
                 </Row><br/>
             <hr/>
             <Row>
                 <div id="personal">Personal Informations</div>
                 <div id="dolor">Amet minim mollit non deserunt ullamco est 
                     sit aliqua dolor do amet sint. </div>
             </Row><br/>
             <Row>
                 <div id="from5">
                     <div>
                     <label id="firstnames">First Name </label><br/>
                     <input id="edward" type="text" placeholder='Bruce'/>
                     </div>
                    
                     <div id="passwords">
                     <label id="firstnames">Last Name</label><br/>
                     <input id="edward" type="text" placeholder='Edwards'/>
                     </div>
                    
                 </div>
             </Row><br/>
             <Row>
                 <div id="emailaddres">
                 <label id="emailadd">Email Address</label><br/>
                 <input id="willie" type="text" placeholder='willie.jennings@example.com'/>
                 </div>
             </Row><br/>
             <div id="hrline">
             <hr/>
             </div>
           
             <Row>
                 <div id="notification">Notifications</div>
                 <div id="choose">Choose type of notifications you want to receive</div>
             </Row><br/>
             <Row>
                 <div id="alerts">
                     <div><input type="checkbox"/></div>
                     <div id="opportunityalert">Opportunity Alerts</div>
                     <div id="assignment">Assignment Alerts</div>
                     <div id="discardchanges">Discard Changes</div>
                   <div  id="savechange">  <button id="changepass">Save Changes</button> </div> 
                     
                 </div>
             </Row>
         </Col>
        </div>

       
        </div>
    )
}
export default Setting