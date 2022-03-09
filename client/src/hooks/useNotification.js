import { useContext } from "react";
import NotificationContext from "../contexts/NotificationProvider";


export const useNotification =()=> {
    return useContext(NotificationContext)
}