import { useNavigate } from "react-router-dom"

const Admin = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <div className="flex flex-col h-[90vh] space-y-10 justify-center items-center">
            <p className="text-3xl">You're allowed to access Admin Page</p>
            <button onClick={() => goBack()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go Back
            </button>
        </div>
    )
}

export default Admin
