import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Art Neal</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Gallery</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
    
}

export default Navigation;