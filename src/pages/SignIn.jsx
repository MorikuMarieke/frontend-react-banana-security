import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import InputField from '../components/inputField/InputField';


function SignIn() {
    const [email, setEmail] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // 1. Async function
    // 2. Try - catch blok
    // 3. Axios request
    async function handleFormSubmit(e) {
        e.preventDefault();
        signIn(email);
        navigate("/profile");
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleFormSubmit}>
                <InputField
                    inputText="E-mailadres"
                    type="text"
                    name="e-mail"
                    id="email-field"
                    placeholder="Vul hier uw e-mailadres in..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    type="submit"
                >
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;