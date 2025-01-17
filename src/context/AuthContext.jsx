import React, {createContext, useState} from 'react';
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({});

export function AuthContextProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState({
        isAuthenticated: false,
        user: {},
    });
    const navigate = useNavigate();

    function signIn(email) {
        setIsAuthenticated({
            isAuthenticated: true,
            user: {email: email},
        });
        console.log('De gebruiker is ingelogd!');
    }

    function signOut() {
        setIsAuthenticated(false);
        console.log('De gebruiker is uitgelogd!');
    }

    const data = {
        isAuthenticated,
        signIn,
        signOut,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}