import { Link, useLocation, useNavigate } from "react-router-dom"

const Unauthorised = () => {

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <div>
            <p>You're not authorised to access the page</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}

export default Unauthorised
