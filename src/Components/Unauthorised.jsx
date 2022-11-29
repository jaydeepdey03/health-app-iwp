import { Link, useLocation, useNavigate } from "react-router-dom"

const Unauthorised = () => {

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <div className="flex flex-col space-y-10 justify-center items-center h-[90vh]">
            <p className="text-5xl">You're not authorised to access the page</p>
            <button onClick={() => goBack()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go Back
            </button>
        </div>
    )
}

export default Unauthorised
