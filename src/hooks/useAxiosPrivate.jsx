import { axiosPrivate } from '../api/axios'
import { useEffect } from 'react'
import useRefreshToken from './useRefreshToken'
import useAuth from './useAuth'

const useAxiosPrivate = () => {
    const refresh = useRefreshToken()
    const { auth } = useAuth()

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
                }
                return config
            },
            error => Promise.reject(error)
        )

        const reponseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async error => {
                const prevRequest = error?.config;
                // console.log("1")
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    const newAccessToken = await refresh()
                    // console.log(prevRequest);
                    // console.log("2")
                    return axiosPrivate({
                        ...prevRequest,
                        headers: { ...prevRequest.headers, Authorization: `Bearer ${newAccessToken}` },
                        sent: true
                    });
                }
                return Promise.reject(error);
            }
        )

        return () => {
            axiosPrivate.interceptors.response.eject(reponseIntercept)
            axiosPrivate.interceptors.request.eject(requestIntercept)
        }
    }, [auth, refresh])

    return axiosPrivate
}

export default useAxiosPrivate
