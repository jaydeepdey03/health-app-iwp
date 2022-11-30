import useRefreshToken from "../hooks/useRefreshToken"
import useAuth from "../hooks/useAuth"
import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"

const Persistlogin = () => {
    const refresh = useRefreshToken()
    const { auth } = useAuth()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh()
            } catch (error) {
                console.error(error)
            }
            finally {
                setLoading(false)
            }

        }
        !auth?.accessToken ? verifyRefreshToken() : setLoading(false)
    }, [])

    useEffect(() => {
        console.log(`loading: ${loading}`)
        console.log(`accessToken: ${JSON.stringify(auth?.accessToken)}`)
    }, [loading])

    return (
        <>
            {loading ? <p>Loading...</p> : <Outlet />}
        </>
    )
}

export default Persistlogin
