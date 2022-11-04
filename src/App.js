import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Usercontext, { Context } from "./context/Usercontext";
import RequireAuth from "./Components/RequireAuth";
import Patientdashboard from "./Pages/Patientdashboard";
import Doctordashboard from "./Pages/Doctordashboard";
import Loginscreen from "./Pages/Loginscreen";
import Unauthorised from "./Components/Unauthorised";

function App() {

  return (
    <Usercontext>
      <Routes>
        <Route path="/login" element={<Loginscreen />} />

        <Route element={<RequireAuth allowedRoles={[2000]} />} >
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[2002]} />} >
          <Route path="/patient/home" element={<Patientdashboard />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[2001]} />} >
          <Route path="/doctor/home" element={<Doctordashboard />} />
        </Route>

        <Route path="/unauthorised" element={<Unauthorised />} />
      </Routes>
    </Usercontext>
  );
}

export default App;
