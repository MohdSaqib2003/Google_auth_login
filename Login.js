import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "233151011019-3f2taq4elajc5p53u53csrjajtekae52.apps.googleusercontent.com";

const Login = ()=>{

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    // after suucessful logned in data stored in session storage
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res);        // all details
        console.log('User info:', res.profileObj); // Loged in user details 
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        console.log("You have been logged out successfully");
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}

export default Login
