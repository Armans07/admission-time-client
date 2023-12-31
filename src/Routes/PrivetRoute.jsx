import React, { Children, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <progress className="progress w-56 mx-auto text-center"></progress>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivetRoute;