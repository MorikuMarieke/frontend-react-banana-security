import React, {createContext, useState} from 'react';
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({
    isAuthenticated: false,
    user: '',
    signIn: () => {},
    signOut: () => {},
});

export function AuthContextProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(''); //Not sure yet to use an object here or an empty string.
    const navigate = useNavigate();

    function signIn() {
        setIsAuthenticated(true);
        console.log('De gebruiker is ingelogd!');
        navigate("/profile");
    }

    function signOut() {
        setIsAuthenticated(false);
        console.log('De gebruiker is uitgelogd!');
        navigate("/");
    }

    const data = {
        isAuthenticated,
        user,
        signIn,
        signOut,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}