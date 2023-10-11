import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing  from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className=" bg-[#0B0117] text-white font-poppin  ">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
