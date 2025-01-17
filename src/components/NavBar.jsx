import React, {useContext, useState} from 'react';
import logo from '../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

function NavBar() {
    const navigate = useNavigate();

    const {isAuthenticated, signOut} = useContext(AuthContext);
    const data = useContext(AuthContext);
    console.log(data);

    function handleSignOutClick(e) {
        e.preventDefault();
        signOut();
        navigate("/")
    }

    return (<nav>
        <Link to="/">
            <span className="logo-container">
                <img src={logo} alt="logo"/>
                <h3>Banana Security</h3>
            </span>
        </Link>

        <div className="user">
            {isAuthenticated ?
                <>
                    <h5>{isAuthenticated.user.email}</h5>
                    <button
                        type="button"
                        onClick={handleSignOutClick}
                    >
                        Log uit
                    </button>
                </>
                :
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