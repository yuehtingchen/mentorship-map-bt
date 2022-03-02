import React from 'react';
import "./Login.css"

export default class Login extends React.Component{
    render() {
        return (
            <div className='page'>
                <div class="split left">
                    <div class = 'center'>
                        <img src = "./logo.png" alt = "logo"></img>
                    </div>
                </div>

                <div class="split right">
                    <h5>Welcome!</h5>
                    <div class="buttons">
                        <button>Login</button>
                    </div>
                </div>  
            </div>
        )
    }
}

