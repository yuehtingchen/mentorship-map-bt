import React from 'react';
import "./Login.css"
import logo from './logo.png';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

export default class Login extends React.Component{
    
    onGoogleLoginSuccess = (response) => {
        const idToken = response.tokenId;
        const data = {
            email: response.profileObj.email,
            first_name: response.profileObj.givenName,
            last_name: response.profileObj.familyName
        };
    
        this.validateTokenAndObtainSession({ data, idToken })
            .then()
            .catch();
    }

    onGoogleLoginFailure = (response) => {
        console.log("Error: google login failed");
    }

    validateTokenAndObtainSession({data, idToken}) {
        const headers = {
            Authorization: idToken,
            'Content-Type': 'application/json'
        };

        // Need to change the hardcoded url
        console.log(data)
        console.log(headers)
        axios.post('http://127.0.0.1:8000/user/login/', data, { headers });
    }
    render() {
        return (
            <div className='page'>
                <div class="split left">
                    <div class = 'center'>
                        <img src = {logo}></img>
                    </div>
                </div>

                <div class="split right">
                    <div class = "center">
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