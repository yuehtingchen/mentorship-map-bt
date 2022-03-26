import React from "react";
import "./Map.css"
import logo from './logo.png';

export default class Map extends React.Component{
    render() {
        return (
            <div>
                <div className="map"></div>
                <footer>
                    <a>About</a>
                    <a>Instagram</a>
                    <img src = {logo}></img>
                </footer>
            </div>
            
        )
    }
}

