import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Loginscreen from "./Pages/Loginscreen";
import Unauthorised from "./Components/Unauthorised";
import UserProvider from "./context/Usercontext";
import Admin from "./Pages/Admin";
import Layout from "./Layout";
import Registerscreen from "./Pages/Registerscreen";
import Missing from "./Missing";
import RequireAuth from "./RequireAuth";
import EditorScreen from "./Pages/EditorScreen";
import Persistlogin from "./Components/Persistlogin";

function App() {

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />} >

          {/* Public Routes (without logged in) */}
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/unauthorised" element={<Unauthorised />} />
          <Route path="/register" element={<Registerscreen />} />


          <Route element={<Persistlogin />}>
            {/* Any User can access with user role */}
            <Route element={<RequireAuth allowedRoles={[2000]} />}>
              <Route path="/" element={<Home />} />
            </Route>


            {/* Protected Routes (Admin) */}
            <Route element={<RequireAuth allowedRoles={[1000]} />}>
              <Route path="/admin" element={<Admin />} />
            </Route>

            {/* Protected Routes(Editor) */}
            <Route element={<RequireAuth allowedRoles={[3000]} />}>
              <Route path="/editor" element={<EditorScreen />} />
            </Route>
          </Route>
          
          {/* Catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
