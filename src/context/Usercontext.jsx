import { createContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Context = createContext()

const Usercontext = ({ children }) => {

    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const [isAuth, setIsAuth] = useState("")

    // get form data in state
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // useEffect(() => {
    //     const login = async () => {
    //         const response = await fetch("http://localhost:5000/api/login", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             credentials: "include",
    //             body: JSON.stringify({
    //                 "email": "benoy@mail.com",
    //                 "password": "test"
    //             })
    //         })
    //         console.log(await response.json())
    //     }
    //     login()
    // }, [])

    // handle form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                "email": formData.email,
                "password": formData.password
            });
            console.log(response.data)
        }
        catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/logout')
            setIsAuth(false)
            console.log("logged out")
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Context.Provider value={{ user, formData, setFormData, handleFormSubmit, logout, isAuth }} >
            {children}
        </Context.Provider>
    )
}

export default Usercontext
