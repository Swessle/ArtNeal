import React, { Component } from "react";
import Collapse from "react-bootstrap/Collapse";
import Navigation from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Gallery from "../components/Gallery";
import { connect } from "react-redux";
import Transition from "react-transition-group/Transition";
import { Animated } from "react-animated-css";

class Pages extends Component {
	state = {
		home: true,
		about: false
	};
	componentDidMount() {
		console.log(this.props.slide.index);
	}
	componentDidUpdate() {
		console.log(this.props);
	}
	setHome() {
		setTimeout(() => {
			this.setState({});
		});
	}
	render() {
		return (
			<div>
				<Navigation />
				<Collapse
					in={this.props.slide.index === 0 ? true : false}
					mountOnEnter={true}
					unmountOnExit={true}
					timeout={1000}
				>
					<div>
						<Home />
					</div>
				</Collapse>

				<Collapse
					in={this.props.slide.index === 1 ? true : false}
					mountOnEnter={true}
					unmountOnExit={true}
					timeout={1000}
				>
					<div>
						<About />
					</div>
				</Collapse>
				<Collapse
					in={this.props.slide.index === 2 ? true : false}
					mountOnEnter={true}
					unmountOnExit={true}
					timeout={1000}
				>
					<div>
						<Gallery />
					</div>
				</Collapse>

				{/* {this.props.slide.index === 0 ? (
					<Fade
						in={true}
						mountOnEnter={true}
						unmountOnExit={true}
					>
						<Home />
					</Fade>
				) : (
					<Fade in={false} mountOnEnter={true} unmountOnExit={true}>
						<Home />
					</Fade>
				)}
				{this.props.slide.index === 1 ? (
					<Fade in={true} mountOnEnter={true} unmountOnExit={true}>
						<About />
					</Fade>
				) : (
					<Fade in={false} mountOnEnter={true} unmountOnExit={true}>
						<About />
					</Fade>
				)} */}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	slide: state.slide
});

export default connect(mapStateToProps)(Pages);
