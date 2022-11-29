
import Navbar from "../Components/Navbar"
import useAuth from "../hooks/useAuth"
import useRefreshToken from "../hooks/useRefreshToken"

const Home = () => {
    const refresh = useRefreshToken()
    const { logout } = useAuth()

    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col space-y-10 justify-center items-center h-[90vh]">
                <p className="text-5xl">Home</p>
                <button onClick={()=>refresh()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Refresh
                </button>
                <button onClick={()=>logout()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Home
