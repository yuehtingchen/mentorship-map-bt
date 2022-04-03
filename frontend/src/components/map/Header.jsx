import React from "react";
import "./Header.css"

function Header() {
    return (
        <header>
            <div class="topnav">
                <a>Intro</a>
                <a>Map</a>
                <a>Database</a>
            </div>
            <div class="right">
                <a>Logout</a>
            </div>
            <h1>Mentor Map</h1>
        </header>
        
    )
}



export default Header;