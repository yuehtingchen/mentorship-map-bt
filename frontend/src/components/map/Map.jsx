import React from "react";
import "./Map.css"
import logo from './logo.png';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default class Map extends React.Component{
    constructor(props) {
        super(props);
        /* ref = React.useRef(null);
        [map, setMap] = React.useState();

        React.useEffect(() => {
            if (ref.current && !map) {
                setMap(new window.google.maps.Map(ref.current, {center: { lat: -34.397, lng: 150.644 }, zoom: 6,}));
            }
        }, [ref, map]); */
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
                        <Nav.Link href="/database"><span id="link">Database</span></Nav.Link>
                        <Nav.Link href="#link"><span id="link">Logout</span></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <div className="map">

                </div>
                <footer>
                    <a>About</a>
                    <a>Instagram</a>
                    <img src = {logo}></img>
                </footer>
            </div>
            
        )
    }
}

