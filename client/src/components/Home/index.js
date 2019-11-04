import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import { setAbout } from "../../actions/pageActions";
import { withRouter } from "react-router-dom";
import firstImage from "../../pages/assets/images/IMG_2624.jpg";
import secondImage from "../../pages/assets/images/IMG_2634.jpg";
import thirdImage from "../../pages/assets/images/IMG_2650.jpg";

class Home extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0,
			direction: null
		};
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
			return <button onClick={this.onChangeAbout}>View Gallery</button>;
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
							src={firstImage}
							alt="First slide"
						/>
						<Carousel.Caption>
							<LandingButton />
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={secondImage}
							alt="Third slide"
						/>

						<Carousel.Caption>
							<LandingButton />
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={thirdImage}
							alt="Third slide"
						/>

						<Carousel.Caption>
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

export default withRouter(
	connect(
		mapStateToProps,
		{ setAbout }
	)(Home)
);
