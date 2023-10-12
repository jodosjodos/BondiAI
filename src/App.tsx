import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing  from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" bg-[#0B0117] text-white font-poppin  ">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
