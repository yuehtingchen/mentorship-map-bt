import React from "react";
import "./Map.css"
import logo from './logo.png';
import { Navbar, Nav, Container} from 'react-bootstrap';

export default class Map extends React.Component{
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
                        <Nav.Link href="#link"><span id="link">Map</span></Nav.Link>
                        <Nav.Link href="#link"><span id="link">Database</span></Nav.Link>
                        <Nav.Link href="#link"><span id="link">Logout</span></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
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

