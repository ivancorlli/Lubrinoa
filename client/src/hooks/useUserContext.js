import { useContext } from "react";
import UserContext from "../contexts/UserProvider";

export const useUserContext =()=> {
    return useContext(UserContext)
}