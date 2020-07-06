import {useEffect, useContext} from 'react'
import useFetch from '../../hooks/hook-fetch'
import {CurrentUserContext} from '../../context/current-user-context'

const CurrentUserChecker = ({ children }:any) => {
    const [, setCurrentUserState] = useContext<any>(CurrentUserContext)
    const {doFetch, response } = useFetch()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            setCurrentUserState((state: any) => ({
                ...state,
                isLoggedIn: false
            }))
            return
        }

        doFetch('/api/auth/check')
        setCurrentUserState((state: any) => ({
            ...state,
            isLoading: true
        }))
    }, [doFetch, setCurrentUserState])

    useEffect(() => {
        if (!response) {
            return
        }
        
        localStorage.setItem('token', response.user.token);

        setCurrentUserState((state: any) => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user
        }))

    }, [response, setCurrentUserState])
    return children
}

export default CurrentUserChecker