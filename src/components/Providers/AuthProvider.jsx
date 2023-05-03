import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);
    const [isCreatingUser, setIsCreatingUser] = useState(false); // new state variable


    const creatUser = (email, password) => {
        setLoading(true);
        setIsCreatingUser(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true);
        setIsCreatingUser(false)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        setIsCreatingUser(false)
        return signOut(auth);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            if (!isCreatingUser) {
                setUser(loggedUser);
            }
            setLoading(false);
        })

        return () => {
            unsubscribe();

        }
    }, [isCreatingUser])

    const authInfo = {
        user,
        creatUser,
        signIn,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;