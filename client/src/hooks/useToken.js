import { useState } from "react"
import AxiosPost from "../utils/AxiosPost"
import jwt from 'jsonwebtoken'
import { useNotification } from "./useNotification"


export const useToken = () => {
    const [token, setToken] = useState( JSON.parse(localStorage.getItem('token')) || null)
    const {handleMessage} = useNotification()

    async function createToken(email,password){
        let string = new URLSearchParams();
        string.append("email", `${email}`);
        string.append("password", `${password}`);
        let url ='/api/login';
        let headers ={ 
            "content-type": "application/x-www-form-urlencoded",
        } 

        try{
            let data = await AxiosPost(url,headers,string)
            setToken(data.token)
        }catch(err){
            handleMessage(err.ok,err.msg)
        }
    }

    async function deleteToken(){
        localStorage.removeItem('token')
        setToken(null)
    }

    async function decodeToken(token){
        if(token){
            let data = await jwt.decode(token)
            if(data && data.exp < Date.now()/1000){
                deleteToken()
            }
        }
    }


    return {
        token,
        createToken,
        deleteToken,
        decodeToken,
    }
}
