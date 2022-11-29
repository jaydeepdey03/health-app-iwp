import { useContext } from "react";
import {UserContext} from "../context/Usercontext";

const useAuth = () => {
    return useContext(UserContext);
}

export default useAuth;