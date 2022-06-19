import React from 'react';
import "./Login.css"
import logo from './logo.png';
import GoogleLogin from 'react-google-login';
import API from '../../api/Api.jsx';

export default class Login extends React.Component{
    
    onGoogleLoginSuccess = (response) => {
        const idToken = response.tokenId;
        const data = {
            email: response.profileObj.email,
            first_name: response.profileObj.givenName,
            last_name: response.profileObj.familyName
        };
    
        this.validateTokenAndObtainSession({ data, idToken });
    }

    onGoogleLoginFailure = (response) => {
        console.log("Error: google login failed");
    }

    validateTokenAndObtainSession({data, idToken}) {
        API.login(idToken, data);
    }
    render() {
        return (
            <div className='page'>
                <div className="split left">
                    <div className = 'center'>
                        <img src = {logo} id="login-img"></img>
                    </div>
                </div>

                <div className="split right">
                    <div className = "center">
                        <h5>Welcome!</h5>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}  // your Google app client ID
                            buttonText="Sign in with Google"
                            onSuccess={this.onGoogleLoginSuccess} // perform your user logic here
                            onFailure={this.onGoogleLoginFailure} // handle errors here
                            isSignedIn={true}
                        />
                    </div>
                </div>  
            </div>
        )
    }  

 
}