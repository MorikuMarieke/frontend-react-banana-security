import React, {useContext, useState} from 'react';
import logo from '../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

function NavBar() {
    const navigate = useNavigate();

    const {isAuthenticated, signIn, signOut} = useContext(AuthContext);
    const data = useContext(AuthContext);
    console.log(data);

    return (<nav>
        <Link to="/">
            <span className="logo-container">
                <img src={logo} alt="logo"/>
                <h3>Banana Security</h3>
            </span>
        </Link>

        <div>
            {isAuthenticated ?
                <button
                    type="button"
                    onClick={signOut}
                >
                    Log uit
                </button> :
                <>
                    <button
                        type="button"
                        onClick={() => navigate('/signin')}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                    >
                        Registreren
                    </button>
                </>
            }
        </div>
    </nav>);
}

export default NavBar;