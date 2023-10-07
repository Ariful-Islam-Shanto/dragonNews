import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    //? state to store the current user data.

    const [user, setUser] = useState([]);
    
    //* Register a new user.
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    //* Login to existing account
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //* Google login 
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //* GitHub login
    const githubProvider = new GithubAuthProvider();

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    //* Facebook login 
    const facebookProvider = new FacebookAuthProvider();

    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    //* Logout from any account.
    const logOut = () => {
        return signOut(auth);
    }



    //? Observe auth state change (get the currently signed-in user)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {user, createUser, userLogIn, githubLogin, googleLogin, facebookLogin, logOut};

    return (
       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;