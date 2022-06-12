import React from "react";
import logo from './logo.png';
import "./Footer.css";


export default class Footer extends React.Component{

    render() {
        return (
            <footer className="footer">
                <div>
                    <a>About</a>
                    <a>Instagram</a>
                </div>
                <img src = {logo}></img>
            </footer> 
        )
    }
}