import React from "react";
import logo from './logo.png';
import "./Footer.css";


export default class Footer extends React.Component{

    render() {
        return (
            <footer className="footer">
                <div>
                    <a href="https://www.beyondtw.org" target="_blank" rel="noopener noreferrer">About</a>
                    <a href="https://www.instagram.com/beyondtaiwan/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <img alt="logo" src={logo}></img>
            </footer> 
        )
    }
}