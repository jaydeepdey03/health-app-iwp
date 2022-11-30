import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "./hooks/useAuth"

const RequireAuth = ({ allowedRoles }) => {

    const { auth } = useAuth()
    const location = useLocation()

    return (
        <div>
            {auth?.role?.find(role1 => allowedRoles.includes(role1))
                ? <Outlet />
                : auth?.email ?
                    <Navigate to="/unauthorised" state={{ from: location }} replace />
                    : <Navigate to="/login" state={{ from: location }} replace />
            }
        </div>
    )
}

export default RequireAuth
