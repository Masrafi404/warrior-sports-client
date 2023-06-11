import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Shared/Provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="d-flex mt-5 justify-content-center">
            <div className="spinner-border mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;