import React, { use } from 'react';
import { AuthContext } from '../components/AuthContext';
import { Navigate } from 'react-router';

const PrivatesRouters = ({ children }) => {
    const { Users } = use(AuthContext)
    if (!Users) {
        return <Navigate to={"/login"}></Navigate>
    }
    return children;
};

export default PrivatesRouters;