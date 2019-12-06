import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../pages/index.css";

const Footer = () => {
	return (
			<Container fluid id="footer">
				<Row>
					<Col>
						<p>©️ 2019 Neal Lange</p>
					</Col>
				</Row>
			</Container>
	);
};

export default Footer;
