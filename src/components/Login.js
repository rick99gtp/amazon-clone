import './Login.css';
import logo from '../assets/amazon-logo-white.jpg';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import '../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const signin = e => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                //signed in
                if(auth) {
                    history.push('/');
                }
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    };

    const createAccount = e => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                if(auth) {
                    history.push('/');
                }
                // const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    };

    return (
        <div className='login'>
            <Link to="/">
                <img src={logo} alt="Amazon Logo" />
            </Link>
            <div className='login-container'>
                <form>
                    <h1>Sign-In</h1>
                    <p>Email</p>
                    <input id='login-email' className='login-input' type='text' name='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <p>Password</p>
                    <input id='login-password' className='login-input' type='text' value={password} onChange={e => setPassword(e.target.value)} />
                    <button id='login-btn' className='login-button' onClick={signin}>Sign In</button>
                </form>
                <p>By signing-in, you agree with my Amazon Clone Conditions of Use and Privacy Notice.</p>
                <button className='login-button login-createaccount' onClick={createAccount}>Create an Amazon Account</button>
            </div>
        </div>
    )
};

export default Login;