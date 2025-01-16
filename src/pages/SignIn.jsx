import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import InputField from '../components/inputField/InputField';


function SignIn() {
    const [email, setEmail] = useState('');
    const {isAuthenticated, signIn, signOut} = useContext(AuthContext);
    const data = useContext(AuthContext);
    console.log(data);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // console.log(isAuthenticated, signIn, signOut);

    function handleFormSubmit(e) {
        e.preventDefault();
        signIn({email}) //hier blijven hangen 16-1, ik moet nog e-mail adres meegeven bij aanroepen van de functie.
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form>
                <InputField
                    inputText="E-mailadres"
                    type="text"
                    name="e-mail"
                    id="email-field"
                    placeholder="Vul hier uw e-mailadres in..."
                />
                {/*<InputField*/}
                {/*    inputText="Wachtwoord"*/}
                {/*    type="onsubmit"*/}
                {/*/>*/}
                <button
                    type="submit"
                    onClick={signIn}
                >Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;