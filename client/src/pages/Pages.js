import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import Navigation from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { history } from "../store";
import "./index.css";

class Pages extends Component {
	componentDidMount() {
		if (this.props.location.pathname !== "/") {
			document.body.classList.add("darkNav");
		}
	}
	componentDidUpdate() {
		if (this.props.location.pathname !== "/") {
			document.body.classList.add("darkNav");
		}
	}
	render() {
		return (
			<div>
				<Navigation />

				{/* Home component */}
				<Collapse
					in={this.props.location.pathname === "/" ? true : false}
					mountOnEnter={true}
					unmountOnExit={true}
					timeout={1000}
				>
					<div>
						<Home />
					</div>
				</Collapse>
				
				{/* Gallery component */}
				<Collapse
					in={
						this.props.location.pathname === "/gallery"
							? true
							: false
					}
					mountOnEnter={true}
					unmountOnExit={true}
					timeout={1000}
				>
					<div>
						<Gallery />
					</div>
				</Collapse>

				{/* About component */}
				<Collapse
					in={
						this.props.location.pathname === "/about" ? true : false
					}
					mountOnEnter={true}
					unmountOnExit={true}
					timeout={1000}
				>
					<div>
						<About />
					</div>
				</Collapse>

				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	slide: state.slide
});

export default withRouter(connect(mapStateToProps)(Pages));
