import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URL from '../BASE_URL'

export const authContext = React.createContext()

const AuthContextWrapper = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    useEffect(() => {

        setToken(localStorage.getItem('token'))
        setUser(JSON.parse(localStorage.getItem('user')))

    }, [])


    const putInLocalStorage = (token, user) => {

        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const signIn = async (username, password) => {
        try {

            const resp = await axios.post(BASE_URL + "/signin", { username, password })
            setToken(resp.data.token)
            setUser(resp.data.user)
            putInLocalStorage(resp.data.token, resp.data.user)
            return true

            
        } catch (e) {
            console.log(e)
            return false
        }


    }


    const signUp = async (username, password, password_repeat) => {
        try {
            const resp = await axios.post(BASE_URL + "/signup", { username, password, password_repeat })
            console.log(resp)
            setToken(resp.data.token)
            setUser(resp.data.user)
            putInLocalStorage(resp.data.token, resp.data.user)
            return true


        } catch (e) {
            console.log(e)
            return false
        }
    }

    const signOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        setToken(null)
        setUser(null)
    }


    const values = {
        user,
        token,
        signIn,
        signUp,
        signOut
    }

    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    );
}

export default AuthContextWrapper;