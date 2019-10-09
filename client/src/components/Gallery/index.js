import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./index.css"


const Gallery = () => {
	return (
		<section className="gallerytabs">
			<Container>
				<Row>
					<Col>
						<div className="gallfilter text-center">
							<ul className="list">
								<li>
									<a className="active" href="#" data-filter="">
										All
								</a>
									<a className="active" href="#" data-filter="">
										Nude
								</a>
									<a className="active" href="#" data-filter="">
										Jazz
								</a>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
};

export default Gallery;
