import React from "react";
import { Navbar, Nav, Container} from 'react-bootstrap';
import "./Header.css";

export default class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="/"><span id="brand">Mentor Map</span></Navbar.Brand>
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
            </div>
            
        )
    }
}