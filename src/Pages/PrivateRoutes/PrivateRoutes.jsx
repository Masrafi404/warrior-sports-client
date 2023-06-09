import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Shared/Provider/AuthProvider';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="d-flex mt-5 justify-content-center">
            <div className="spinner-border mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;