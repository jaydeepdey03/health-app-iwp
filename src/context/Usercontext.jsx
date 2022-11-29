import { createContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom"

export const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [auth, setAuth] = useState({})
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const location = useLocation()
    
    const from = location.state?.for?.pathname || "/"

    const [formData, setFormData] = useState({ email: "", password: "" });

    // handle form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login',formData, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            const accessToken = response?.data?.accessToken;
            const role = response?.data?.role;
            setAuth({ email: formData.email, accessToken, role })
            navigate(from, {replace: true})
        }
        catch (error) {
            if (!error?.response) {
                setError("No Response of Server")
            }
            else if (error?.response?.status === 400) {
                setError('Missing Username or Password')
            }
            else if (error?.response?.status === 401) {
                setError('Unauthorized')
            }
            else {
                setError('Something went wrong')
            }
        }
    };

    const logout = async () => {
        try {
            await axios.get('http://localhost:5000/api/logout', {
                withCredentials: true
            })
            setAuth({})
            navigate('/login', {replace: true})
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <UserContext.Provider value={{ auth, user, formData, setFormData, handleFormSubmit, setAuth, setUser, logout }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
