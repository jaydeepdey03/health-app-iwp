import { useContext } from "react"
import { useLocation, Navigate, Outlet } from "react-router-dom"
import { Context } from "../context/Usercontext"

const RequireAuth = ({ allowedRoles }) => {

    const location = useLocation()
    // fetch from context
    const { auth, isAuth } = useContext(Context)

    return (
        isAuth
            ? <Outlet /> :  <Navigate to="/login" state={{ from: location }} replace />

    )
}

export default RequireAuth
