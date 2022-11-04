import Context from "../context/Usercontext";
import { useContext } from "react";

const useAuth = () => {
    return useContext(Context)
}

export default useAuth