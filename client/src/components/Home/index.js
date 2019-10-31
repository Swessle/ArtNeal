import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

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

	render() {
		const { index, direction } = this.state;

		return (
			<Carousel
				activeIndex={index}
				interval={1000}
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
						src="https://picsum.photos/800/400?text=Fourth slide&bg=282c34"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://picsum.photos/800/400?text=Second slide&bg=282c34"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://picsum.photos/800/400?text=Third slide&bg=20232a"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default Home;
