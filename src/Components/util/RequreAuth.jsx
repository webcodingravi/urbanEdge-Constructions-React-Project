import { useContext } from "react";
import { AuthContext } from "../Admin/Context/Auth";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to="/admin/login" />
    }
    return children
}

export default RequireAuth;