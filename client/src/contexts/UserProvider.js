import React, { createContext, useEffect, useState } from 'react'
import { useTokenContext } from '../hooks/useTokenContext'
import AxiosInstance from '../utils/AxiosInstance'

const UserContext = createContext()

const initialUser = {
    name:'',
    surname:'',
    role:''
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(initialUser)
    const {token} = useTokenContext();

    async function getUser(){
        try{
            let {data} = await AxiosInstance.get('user')
            setUser(data.user)
        }catch(err){
            return err.response
        }
    }

    useEffect(() => {
        if(token){
            getUser()
        }
        return () => {
        }
    }, [token])

    const value ={user,getUser}
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext