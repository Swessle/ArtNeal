import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";

import GalleryCard from "../GalleryCard";
import galleryPics from "../../Gallery.json";

const GalleryModal = props => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{props.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row className="justify-content-md-center">
					<img
						style={{
							maxHeight: "80vh !important",
							maxWidth: "100%"
						}}
						src={props.image}
						rel="preload"
					/>
				</Row>
			</Modal.Body>
		</Modal>
	);
};

const Gallery = () => {
	const [pics, setPics] = useState(galleryPics);
	const [filteredPics, setfilteredPics] = useState(null);
	const [modalShow, setModalShow] = useState(false);
	const [currentPic, setCurrentPic] = useState({ image: "", title: "" });

	var jazz = pics.filter(e => e.category === "Jazz");
	var portrait = pics.filter(e => e.category === "Portrait");
	var abstract = pics.filter(e => e.category === "Abstract");
	var water = pics.filter(e => e.category === "Nautical");
	var life = pics.filter(e => e.category === "Life");

	useEffect(() => {
		setfilteredPics(pics);
	}, []);

	const handleClickAll = () => {
		setfilteredPics(pics);
	};
	const handleClickJazz = () => {
		setfilteredPics(jazz);
		console.log(jazz);
	};
	const handleClickAbstract = () => {
		setfilteredPics(abstract);
	};

	const handleClickWater = () => {
		setfilteredPics(water);
	};

	const handleClickLife = () => {
		setfilteredPics(life);
	};

	const handleClickPortrait = () => {
		setfilteredPics(portrait);
	};

	return (
		<section className="gallerytabs">
			<Container className="my-shuffle-container">
				<Row>
					<Col>
						<div className="gallfilter text-center">
							<ul className="list">
								<li>
									<Button onClick={handleClickAll}>
										All
									</Button>

									<Button onClick={handleClickPortrait}>
										Portrait
									</Button>
									<Button onClick={handleClickAbstract}>
										Abstract
									</Button>
									<Button onClick={handleClickWater}>
										Water
									</Button>
									<Button onClick={handleClickLife}>
										Life
									</Button>
									<Button onClick={handleClickJazz}>
										Jazz
									</Button>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
				<Row className="shufflePics justify-content-md-center">
					{filteredPics &&
						filteredPics.map(pic => (
							<>
								<div
									id={pic.id}
									className="card col-xs-12 col-sm-6 col-md-3"
									category={pic.category}
									onClick={() => {
										setModalShow(true);
										setCurrentPic({
											image: pic.image,
											title: pic.name
										});
									}}
								>
									<GalleryCard
										key={pic.id}
										image={pic.image}
										category={pic.category}
									/>
								</div>
							</>
						))}
				</Row>
				<GalleryModal
					show={modalShow}
					onHide={() => setModalShow(false)}
					image={currentPic.image}
					name={currentPic.title}
				/>
			</Container>
		</section>
	);
};

export default Gallery;
