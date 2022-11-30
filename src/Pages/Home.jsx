
import Navbar from "../Components/Navbar"
import useLogout from "../hooks/useLogout"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const logout = useLogout()
    const axiosPrivate = useAxiosPrivate()
    const navigate = useNavigate()

    async function getUser(){
        const response = await axiosPrivate.get('/getUser')
        console.log(response)
    }

    const signOut = async ()=> {
        await logout()
        navigate('/login')
    }

    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col space-y-10 justify-center items-center h-[90vh]">
                <p className="text-5xl">Home</p>
                <button onClick={()=>getUser()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get Users
                </button>
                <button onClick={()=>signOut()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Home
