import React from "react";
import "./Header.css";

export default class Header extends React.Component{

    render() {
        return (
            <header>
                <div className="topnav">
                    <a href="/">Map</a>
                    <a href="/database">Database</a>
                </div>
                <div className="right">
                    <a href="/login">Logout</a>
                </div>
                <a href="/"><h1>Mentor Map</h1></a>
            </header>  
        )
    }
}