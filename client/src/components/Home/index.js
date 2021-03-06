import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import { setAbout } from "../../actions/pageActions";
import { withRouter } from "react-router-dom";
import firstImage from "../../pages/assets/images/IMG_2624.jpg";
import secondImage from "../../pages/assets/images/IMG_2634.jpg";
import thirdImage from "../../pages/assets/images/IMG_2650.jpg";
import "./index.css";

class Home extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0,
			direction: null
		};
	}

	componentDidMount() {
		if (this.props.location.pathname !== "/") {
			document.body.classList.add("darkNav");
		} else if (this.props.location.pathname === "/") {
			document.body.classList.remove("darkNav");
		}
	}
	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	}

	onChangeAbout = () => {
		this.props.history.push("/gallery");
	};

	render() {
		const { index, direction } = this.state;
		const LandingButton = () => {
			return (
				<button id="landingbtn" onClick={this.onChangeAbout}>
					View Gallery
				</button>
			);
		};
		const LandingText = () => {
			return <h1 id="landingtext">Neal Lange</h1>;
		};

		return (
			<>
				<Carousel
					activeIndex={index}
					interval={4000}
					touch={false}
					fade={true}
					indicators={false}
					keyboard={false}
					pauseOnHover={false}
					controls={false}
					onSelect={this.handleSelect}
				>
					<Carousel.Item>
						<img
							className="d-block w-100"
							id="landingimage"
							src={firstImage}
							alt="First slide"
						/>
						<Carousel.Caption id="textcaption">
							<LandingText />
						</Carousel.Caption>

						<Carousel.Caption id="btncaption">
							<LandingButton />
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block w-100"
							id="landingimage"
							src={secondImage}
							alt="Third slide"
						/>

						<Carousel.Caption id="textcaption">
							<LandingText />
						</Carousel.Caption>

						<Carousel.Caption id="btncaption">
							<LandingButton />
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block w-100"
							id="landingimage"
							src={thirdImage}
							alt="Third slide"
						/>

						<Carousel.Caption id="textcaption">
							<LandingText />
						</Carousel.Caption>

						<Carousel.Caption id="btncaption">
							<LandingButton />
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</>
		);
	}
}

const mapStateToProps = state => ({
	slide: state.slide
});

export default withRouter(connect(mapStateToProps, { setAbout })(Home));
