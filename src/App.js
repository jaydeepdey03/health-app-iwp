import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Usercontext, { Context } from "./context/Usercontext";
import Loginscreen from "./Pages/Loginscreen";
import Unauthorised from "./Components/Unauthorised";

function App() {

  return (
    <Usercontext>
      <Routes>
        <Route path="/login" element={<Loginscreen />} />
        <Route path="/" element={<Home />} />
        <Route path="/unauthorised" element={<Unauthorised />} />
      </Routes>
    </Usercontext>
  );
}

export default App;
