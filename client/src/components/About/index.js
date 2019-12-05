import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../pages/index.css";
import Image from "../../pages/assets/images/Neal.jpg";

import GoogleMap from "../GoogleMap";


const About = () => {
	return (
		<Container id="aboutContainer">
			<Row>
				<Col id="imgspacing" className="text-center">
					
						<img
							src={Image}
							rel="preload"
							id="nealimage"
						/>
					
				</Col>
			</Row>
			<Row>
				<Col>
					<h1 id="aboutneal">ABOUT NEAL</h1>
					<p id="aboutText">
						All my life I have been blessed with a beautiful and interesting life. I’ve traveled extensively and lived in scenic and wonderful places. I’ve been surrounded by a  loving family, lifelong friends and amazing opportunities. My art is a reflection of the wondrous life I have lived and I’m grateful every day for all the people and circumstances that have shaped my life. Welcome to my website and I hope you enjoy seeing my paintings as much as I have enjoyed creating them.
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<i class="fas fa-envelope" style={{color: "black", fontSize: "25px", verticalAlign: "middle", paddingRight: "5px"}}></i> <a href="#">skadit@gmail.com</a> 
				</Col>	
			</Row>
			<Row className="pt-5 pb-5">
				<Col className="text-center">
					<h1>Location</h1>
					<GoogleMap />
				</Col>
			</Row>
		</Container>
	);
};

export default About;
