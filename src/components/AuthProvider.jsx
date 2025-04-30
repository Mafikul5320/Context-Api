import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const UserEmail = {
        email: "abc@gmail.com"
    }
    return (
        <AuthContext value={UserEmail}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;