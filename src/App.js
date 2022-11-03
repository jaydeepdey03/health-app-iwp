import Loginscreen from "./Pages/Loginscreen";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Usercontext from "./context/Usercontext";

function App() {
  return (
    <Usercontext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Loginscreen />} />
      </Routes>
    </Usercontext>
  );
}

export default App;
