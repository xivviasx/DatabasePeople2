import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const LoginPage = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const navigate = useNavigate();

    const responseGoogle = (response) => {
        console.log('Google authentication response:', response);

        // Handle the Google authentication response
        if (response.profileObj) {
            setLoggedInUser({
                id: response.profileObj.googleId,
                name: response.profileObj.name,
                email: response.profileObj.email,
                imageUrl: response.profileObj.imageUrl,
            });

            // Redirect to "/home" after successful login
            console.log('Redirecting to /home');
            navigate('/home');
        }
    };


    return (
        <div>
            {!loggedInUser ? (
                <>
                    <h2>Login Page</h2>
                    <GoogleLogin
                        clientId="1047474511535-ctvg6lhqbhsi41ugrmddmi6r4799v905.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </>
            ) : (
                <div>
                    <h2>Welcome, {loggedInUser.name}!</h2>
                    {/* Redirect or show some content for authenticated users */}
                </div>
            )}
        </div>
    );
};

export default LoginPage;
