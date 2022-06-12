import React from "react";
import logo from './logo.png';
import "./Database.css";
import Table from 'react-bootstrap/Table'
import Header from "../Header.jsx"

export default class Database extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
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
                            <td>Jonhs</td>
                            <td>BioChem</td>
                            <td>1945</td>
                            <td>California University of Pennsylvania</td>
                            <td>California</td>
                            <td>United States of America</td>
                            <td>0118 999 881 999 119 725  3</td>
                        </tr>
                    </thead>
                </Table>
                <footer>
                    <div className="sticky">
                        <a>About</a>
                        <a>Instagram</a>
                    </div>
                    
                    <img src = {logo}></img>
                </footer>
            </div>
            
        )
    }
}

