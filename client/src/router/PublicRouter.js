import React from 'react'
import {Navigate} from 'react-router-dom'
import { useTokenContext } from '../hooks/useTokenContext'

export const PublicRouter = ({children}) => {
    const {token} = useTokenContext();
    return !token 
            ?
            children
            :
            <Navigate to='/'/>
}
