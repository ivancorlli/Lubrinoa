import { createContext, useState } from "react"

const NotificationContext = createContext()

export const NotificationProvider=({children})=>{
    const [message, setMessage] = useState(null)

    function handleMessage(status,msg){
        setMessage({
            status,
            msg,
        })
        setInterval(()=>{
            setMessage(null)
        },8000)
    }
    const value = {message,handleMessage}
    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext