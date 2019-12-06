import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import {
	setHome,
	setGallery,
	setAbout,
	setContact
} from "../../actions/pageActions";
import { withRouter } from "react-router-dom";
import "./index.css"

class Navigation extends Component {
	componentDidMount() {
		console.log(this.props);
	}
	onChange = value => {
		switch (value) {
			case "/about":
				this.props.history.push("/about");
				return this.props.setAbout();
			case "/gallery":
				this.props.history.push("/gallery");
				return this.props.setGallery();
			case "/contact":
				this.props.history.push("/contact");
				return this.props.setContact();
			default:
				return this.props.setHome();
		}
	};
	render() {
		return (
			<Navbar className="bg-transparent" variant="dark">
				<Nav
					onSelect={selectedKey => this.onChange(selectedKey)}
					activeKey={this.props.history.location.pathname}
					className="mr-auto"
				>
					<Nav.Link className="underline" active eventKey="/gallery">Gallery</Nav.Link>
					<Nav.Link active eventKey="/about">About</Nav.Link>
					<Nav.Link active href={`mailto:neabo59@gmail.com`} target="_blank">Contact</Nav.Link>
				</Nav>
			</Navbar>
		);
	}
}

const mapStateToProps = state => ({
	slide: state.slide
});

export default withRouter(
	connect(mapStateToProps, { setHome, setAbout, setGallery, setContact })(
		Navigation
	)
);
