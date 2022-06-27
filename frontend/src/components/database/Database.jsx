import React from "react";
import "./Database.css";
import Table from 'react-bootstrap/Table'
import Header from "../Header.jsx"
import Footer from "../Footer.jsx"
import API from "../../api/Api.jsx";

export default class Database extends React.Component{
    constructor(props) {
        super(props);
        this.state = {      
            mentors: null,    
        };
    }

    componentDidMount() {
        API.getTable("password")
        .then(res => {
            this.setState({mentors: res == null? null: res.mentors});
        })
    }

    render() {
        let mentors = this.state.mentors;
        let tableContents;
        if(mentors == null) {
            tableContents = (<tr><td>no data</td></tr>);
        }
        else {
            tableContents = [];
            for(const mentor of mentors) {
                tableContents.push((
                <tr key={mentor.email}>
                <td>{mentor.first_name} {mentor.last_name}</td>
                <td>{mentor.major}</td>
                <td>{mentor.grad_year}</td>
                <td>California University of Pennsylvania</td>
                <td>California</td>
                <td>United States of America</td>
                <td>{mentor.email} 
                    {mentor.linkedin == null? null: <br></br>}{mentor.linkedin}</td>
                <td>{mentor.essay_editing + ""}</td>
                </tr>));
            }
        }  

        return (
            <div>
                <Header/>
                <div className="table">
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Major</th>
                            <th>College Class</th>
                            <th>University</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Contact</th>
                            <th>Essay Editing</th>
                        </tr>
                        {tableContents}      
                    </thead>
                </Table>
                </div>
                <Footer/>
            </div>
            
        )
    }
}

