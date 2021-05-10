import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react'
import './Login.css';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className = 'login'>

            <div className="login__logo">
                <img src="https://miro.medium.com/max/800/1*_AsB_hCguMYC-wEG2Bidmw.png"
                 alt=""/>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
