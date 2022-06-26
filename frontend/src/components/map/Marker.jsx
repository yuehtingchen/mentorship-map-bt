import React from "react"
import API from "../../api/Api.jsx";
import "./Marker.css";
import { Marker, InfoWindow } from '@react-google-maps/api';

export default class MyMarker extends React.Component {
    constructor(props) {
        // props : id, lat, long, isOpen
        super(props);

        this.state = {
            isLoaded: false,
            name: null,
            city: null,
            country: null,
            mentors: []
        }

        this.onToggleOpen.bind(this);
    }

    onToggleOpen = () => {
        this.props.handleToggleOpen();
        if(this.props.isOpen && !this.state.isLoaded) {
            API.getSchoolsId("accessToken", this.props.id)
            .then(res => {
                this.setState({
                    isLoaded: true,
                    name: res.name, 
                    city: res.city,
                    country: res.country,
                    mentors: res.mentors
                });
            });
        }
    }

    render() {
        const mentors = this.state.mentors;
        let mentorContent = []
        for(const mentor of mentors) {
            mentorContent.push((
                <div key={mentor.email} className="markerContent">
                    <strong>{`${mentor.first_name} ${mentor.last_name}`} </strong>
                    <br/>
                    {`Class of ${mentor.grad_year}`} <br/>
                    {mentor.intro? <p>{mentor.intro}</p>: null}
                    <a href={`mailto: ${mentor.email}`}>{mentor.email}</a>
                    <br/>
                    <a href={mentor.linkedin}>{mentor.linkedin}</a>
                </div>
            ))
        }
        return(
            <Marker
                position={{lat: this.props.lat, lng: this.props.long}}
                onClick={this.onToggleOpen}
                >
                {this.props.isOpen && <InfoWindow
                    onCloseClick={this.onToggleOpen}
                    options={{ closeBoxURL: ``, enableEventPropagation: true }}
                >
                    <div style={{ backgroundColor: `white`, opacity: 0.9, padding: `12px` }}>
                    <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                        <h5>{`${this.state.name}`}</h5>
                        <div>{`${this.state.city}, ${this.state.country}`}</div>
                        {mentorContent}
                    </div>
                    </div>
                </InfoWindow>}
            </Marker>
        )
    }
}