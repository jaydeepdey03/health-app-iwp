import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "./hooks/useAuth"

const RequireAuth = () => {

    const { auth } = useAuth()
    const location = useLocation()

    return (
        <div>
            {auth?.email ? 
                <Outlet />: (
                <Navigate to="/login" state={{from: location}} replace />
            )
        }
        </div>
    )
}

export default RequireAuth
