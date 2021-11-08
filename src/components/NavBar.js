import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function NavigationBar() {
    return (
        <Navbar className="navbar"  expand="lg" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavigationBar;