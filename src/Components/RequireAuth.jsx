import { useContext } from "react"
import { useLocation, Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/Usercontext"

const RequireAuth = ({ allowedRoles }) => {

    const location = useLocation()
    // fetch from context
    const { auth, isAuth } = useContext(UserContext)

    return (
        isAuth
            ? <Outlet /> :  <Navigate to="/login" state={{ from: location }} replace />

    )
}

export default RequireAuth
