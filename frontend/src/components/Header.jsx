import React from "react";
import { Navbar, Nav, Container} from 'react-bootstrap';
import "./Header.css";

export default class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div class="topnav">
                    <a href="/">Map</a>
                    <a href="/database">Database</a>
                </div>
                <div class="right">
                    <a href="/login">Logout</a>
                </div>
                <a href="/"><h1>Mentor Map</h1></a>
            </header>  
        )
    }
}