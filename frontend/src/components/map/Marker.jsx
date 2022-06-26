import React from "react"
import API from "../../api/Api.jsx";
import "./Marker.css";
import { Marker, InfoWindow } from '@react-google-maps/api';
import flag from "../../img/flag.png";
import check from "../../img/check.png";
import deleteImg from "../../img/delete.png";
import question from "../../img/question.png";

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
                    mentors: res.mentors,
                    essay_editing: res.essay_editing,
                });
            });
        }
    }

    render() {
        const mentors = this.state.mentors;
        let mentorContent = []
        for(const mentor of mentors) {
            mentorContent.push((
                <div key={mentor.email} className="mentorConent">
                    <div className="mentorHeader">
                    <strong className="mentorName">{`${mentor.first_name} ${mentor.last_name}`} </strong>
                    <br/><br/>
                    {`${this.state.name}, ${mentor.major}, ${mentor.grad_year}`} 
                    </div>

                    {mentor.intro? <p>{mentor.intro}</p>: null }

                    Essay Editing <img src={
                        mentor.essay_editing == null ? question : 
                        (mentor.essay_editing ? check : deleteImg)}></img> <br/><br/>
                    Contact: <br/>
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
                icon={flag}
                >
                {this.props.isOpen && <InfoWindow
                    onCloseClick={this.onToggleOpen}
                    options={{ closeBoxURL: ``, enableEventPropagation: true }}
                    className="infoWindow"
                >
                    <div>
                        <div className="header">
                        <h4>{`${this.state.name}`}</h4>
                        <div>{`${this.state.city} | ${this.state.country}`}</div>
                        </div>

                        <div className="content">
                        {mentorContent}
                        </div>
                    </div>
                   
                </InfoWindow>}
            </Marker>
        )
    }
}