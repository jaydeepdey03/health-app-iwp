
import Navbar from "../Components/Navbar"
import useAuth from "../hooks/useAuth"
import useAxiosPrivate from "../hooks/useAxiosPrivate"

const Home = () => {
    const { logout, auth } = useAuth()
    const axiosPrivate = useAxiosPrivate()

    async function getUser(){
        const response = await axiosPrivate.get('/getUser')
        console.log(response)
    }

    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col space-y-10 justify-center items-center h-[90vh]">
                <p className="text-5xl">Home</p>
                <button onClick={()=>getUser()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get Users
                </button>
                <button onClick={()=>logout()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Home
