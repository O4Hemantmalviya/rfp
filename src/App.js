import "./App.css";
import Loginref from "./Components/Loginref";
import Register from "./Components/Register";
import Verify from "./Components/Verification";
import For from "./Components/Forget";
import Dash from "./Components/Dashboard";
import { Routes, Route } from "react-router-dom";

import Profile from "./Components/Navbar";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginref />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/forget" element={<For />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/dash" element={<Dash/>}></Route>
      </Routes>

     
     
      {/* <Pro/> */}
    </div>
  );
}

export default App;
