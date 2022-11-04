import { createContext, useState } from "react"
import axios from "axios"

export const Context = createContext()

const Usercontext = ({ children }) => {

    const [auth, setAuth] = useState({})

    // get form data in state
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // login using axios
    const login = async () => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/login", formData)
            setAuth(data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Context.Provider value={{ auth, setAuth, formData, setFormData, login }} >
            {children}
        </Context.Provider>
    )
}

export default Usercontext
