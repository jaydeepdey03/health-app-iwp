import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Loginscreen from "./Pages/Loginscreen";
import Unauthorised from "./Components/Unauthorised";
import UserProvider from "./context/Usercontext";
import Admin from "./Pages/Admin";
import Userscreen from "./Pages/Userscreen";
import Layout from "./Layout";
import Registerscreen from "./Pages/Registerscreen";
import Missing from "./Missing";
import RequireAuth from "./RequireAuth";

function App() {

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          {/* Public Routes */}
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/unauthorised" element={<Unauthorised />} />
          <Route path="/register" element={<Registerscreen />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth /> }>
            <Route path="/admin" element={<Admin />} />
            <Route path="/user" element={<Userscreen />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
