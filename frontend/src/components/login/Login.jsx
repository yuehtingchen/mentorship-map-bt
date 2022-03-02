import React from 'react';
import "./Login.css"
import logo from './logo.png';

export default class Login extends React.Component{
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
                        <button>Login</button>
                    </div>
                </div>  
            </div>
        )
    }
}

