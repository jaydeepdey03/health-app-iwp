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
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    const accessToken = await refresh()
                    axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
                    return axiosPrivate(originalRequest);
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
