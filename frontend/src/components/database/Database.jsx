import React from "react";
import "./Database.css";
import Table from 'react-bootstrap/Table'
import Header from "../Header.jsx"
import Footer from "../Footer.jsx"

export default class Database extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="table">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Major</th>
                            <th>College Class</th>
                            <th>University</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Contact</th>
                        </tr>
                        <tr>
                            <td>John Appleseed</td>
                            <td>Bio Chemistry</td>
                            <td>2020</td>
                            <td>California University of Pennsylvania</td>
                            <td>California</td>
                            <td>United States of America</td>
                            <td>example@example.com</td>
                        </tr>
                    </thead>
                </Table>
                </div>
                <Footer/>
            </div>
            
        )
    }
}

