import React from 'react';
import { AuthContext } from './AuthContext';

import { auth } from './LoginReg';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const createUser = (Email, Password) => {
        return createUserWithEmailAndPassword(auth, Email, Password)
    }
    const User = {
        createUser
    }
    return (
        <AuthContext value={User}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;