import React from "react";
import "./Map.css"
import API from "../../api/Api.jsx";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MyMarker from "./Marker.jsx";
import Header from "../Header.jsx"
import Footer from "../Footer.jsx"

const containerStyle = {
    width: "100%",
    height: "83vh"
};
    
const center = {
    lat: 37.0902,
    lng: -95.7129
};

export default class Map extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            markers: [],
            activeId: null,
        }

    }

    componentDidMount() {

        API.getSchools("accessToken")
        .then(res => {
            const schools = res;
            let markers = []
            for(const school of schools) {
                markers.push({
                    id: school.id,
                    lat: school.lat,
                    long: school.long,
                    isOpen: false,
                });
            }
            this.setState({markers: markers});
        });
    }


    render() {
        const markers = this.state.markers;
        let schoolMarkers = [];
        for(const marker of markers) {
            schoolMarkers.push(
                <MyMarker handleToggleOpen={() => {
                        this.setState({
                            activeId: this.state.activeId === marker.id ? 0 : marker.id
                        })
                    }} 
                    isOpen={marker.id === this.state.activeId ? true : false} 
                    key={marker.id} 
                    id={marker.id} 
                    lat={marker.lat} 
                    long={marker.long}
                />
            )
        }

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
                        {schoolMarkers}
                    </GoogleMap>
                </LoadScript>
                <Footer/>
            </div>
            
        )
    }
}

