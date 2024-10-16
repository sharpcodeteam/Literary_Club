import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Card from "./componants/Card";
import Navbar from "./componants/Navbar";
import LoginFinal from "./componants/Login";
import SignupFinal from "./componants/SignUp";
import Booking from "./componants/Buybook";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Card/>}></Route>
        <Route path="/login" element={<LoginFinal/>}/>
        <Route path="/signin" element={<SignupFinal/>}/>
        <Route path="/booking" element={<Booking/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;