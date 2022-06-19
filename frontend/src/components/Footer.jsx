import React from "react";
import logo from './logo.png';
import "./Footer.css";


export default class Footer extends React.Component{

    render() {
        return (
            <footer className="footer">
                <div>
                    <a href="https://www.beyondtw.org" target="_blank">About</a>
                    <a href="https://www.instagram.com/beyondtaiwan/" target="_blank">Instagram</a>
                </div>
                <img src={logo}></img>
            </footer> 
        )
    }
}