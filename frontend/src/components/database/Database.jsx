import React from "react";
import logo from './logo.png';
import "./Database.css";
import { Navbar, Nav, Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default class Database extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="#home"><span id="brand">Mentor Map</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/"><span id="link">Map</span></Nav.Link>
                        <Nav.Link href="/database"><span id="link">Database</span></Nav.Link>
                        <Nav.Link href="#link"><span id="link">Logout</span></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
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

