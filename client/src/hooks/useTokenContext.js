import { useContext } from "react"
import TokenContext from "../contexts/TokenProvider"



export const useTokenContext = () => {
    return  useContext(TokenContext)
}
