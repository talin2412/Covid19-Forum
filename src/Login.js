import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react'
import './Login.css';

import logo from './Logo.png'

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className = 'login'>

            <div className="login__logo">
                <img src={logo}
                 alt=""/>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
