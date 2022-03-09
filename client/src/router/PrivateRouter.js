import { Navigate } from "react-router-dom";
import { useTokenContext } from "../hooks/useTokenContext";

export const PrivateRouter = ({ children }) => {
  const { token } = useTokenContext();


  return !token ? <Navigate to="/login" /> : children;
};
