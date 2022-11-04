import { useContext } from "react"
import { useLocation, Navigate, Outlet } from "react-router-dom"
import { Context } from "../context/Usercontext"

const RequireAuth = ({ allowedRoles }) => {
    
    const location = useLocation()

    const { auth } = useContext(Context)

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet /> :
            auth?.user ? <Navigate to="/unauthorised" state={{ from: location }} replace /> : <Navigate to="/login" state={{ from: location }} replace />

    )
}

export default RequireAuth
