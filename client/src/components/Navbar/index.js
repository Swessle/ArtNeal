import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {connect} from "react-redux"
import {setHome, setGallery, setAbout, setContact} from "../../actions/pageActions"

class Navigation extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    onChange = (value) => {
        switch (parseInt(value)) {
            case 0:
                return this.props.setHome()
            case 1:
                return this.props.setGallery()
            case 2:
                return this.props.setAbout()
            case 3:
                return this.props.setContact()
            default: 
                return null
        }
    }
    render() {
        return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                Art Neal
            </Navbar.Brand>
            <Nav onSelect={selectedKey=>this.onChange(selectedKey)} className="mr-auto">
                <Nav.Link eventKey="0">Home</Nav.Link>
                <Nav.Link eventKey="1">About</Nav.Link>
                <Nav.Link eventKey="2">Gallery</Nav.Link>
                <Nav.Link eventKey="3">Contact</Nav.Link>
            </Nav>
        </Navbar>
        )
    }
}

const mapStateToProps = state => ({
  slide: state.slide
})


export default connect(
	mapStateToProps,
	{ setHome, setAbout, setGallery, setContact }
)(Navigation);