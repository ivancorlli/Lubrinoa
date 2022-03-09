import { createContext, useEffect } from "react"
import { useToken } from "../hooks/useToken";

const TokenContext = createContext()

export const TokenProvider = ({children}) => {
    const {token,createToken,deleteToken,decodeToken} = useToken()
    
    async function logIn(email,password){
        await createToken(email,password)
    }

    function logOut(){
        deleteToken();
    }
    
    useEffect(() => {
        if(token){
            localStorage.setItem('token', JSON.stringify(token))
            decodeToken(token)
        }
        return () => {
        }
    }, [token,decodeToken])
    
    const value = {logIn,logOut,token};
    return (
        <TokenContext.Provider value={value}>
            {children}
        </TokenContext.Provider>
    )
}

export default TokenContext
