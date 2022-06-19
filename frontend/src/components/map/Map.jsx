import React from "react";
import "./Map.css"
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Header from "../Header.jsx"
import Footer from "../Footer.jsx"

const containerStyle = {
    width: "100%",
    height: "90vh"
};
    
const center = {
    lat: 37.0902,
    lng: -95.7129
};

export default class Map extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Header/>
                <LoadScript
                    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API}
                    >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={4}
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <></>
                </GoogleMap>
                </LoadScript>
                <Footer/>
            </div>
            
        )
    }
}

