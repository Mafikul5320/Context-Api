import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './LoginReg';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [Users, setUsers] = useState(null)

    const createUser = (Email, Password) => {
        return createUserWithEmailAndPassword(auth, Email, Password)
    }
    const signIn = (email, Password) => {
        return signInWithEmailAndPassword(auth, email, Password)
    }
    const SignOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                console.log("User Signed Out")
            }
        })
        return () => (
            Unsubscribe()
        )
    }, [])
    const User = {
        Users,
        createUser,
        signIn,
        SignOut
    }
    return (
        <AuthContext value={User}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;