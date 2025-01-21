import React, {createContext, useState} from 'react';
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({});

export function AuthContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: {},
    });
    const navigate = useNavigate();

    function signIn(email) {
        setAuth({
            isAuth: true,
            user: {
                username: '',
                email: email,
                id: '',
            }
        });
        console.log('De gebruiker is ingelogd!');
    }

    function signOut() {
        setAuth({
            isAuth: false,
            user: null,
        });
        console.log('De gebruiker is uitgelogd!');
    }

    const contextData = {
        isAuth: auth.isAuth,
        signIn,
        signOut,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}