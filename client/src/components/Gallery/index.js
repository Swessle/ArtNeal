import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Image,
	Button,
	Modal,
	Fade,
	Collapse
} from "react-bootstrap";

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
							maxHeight: "50vh !important",
							maxWidth: "70%"
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
	const [fade, setFade] = useState(false);
	const [collapse, setCollapse] = useState(true);

	var jazz = pics.filter(e => e.category === "Jazz");
	var portrait = pics.filter(e => e.category === "Portrait");
	var abstract = pics.filter(e => e.category === "Abstract");
	var water = pics.filter(e => e.category === "Nautical");
	var life = pics.filter(e => e.category === "Life");

	useEffect(() => {
		setfilteredPics(pics);
		setTimeout(() => {
			setFade(true);
		}, 500);
	}, []);

	const handleClickAll = () => {
		setFade(false);
		setTimeout(() => {
			setfilteredPics(pics);
		}, 150);
		setTimeout(() => {
			setFade(true);
		}, 500);
	};
	const handleClickJazz = () => {
		setFade(false);
		setTimeout(() => {
			setfilteredPics(jazz);
		}, 150);
		setTimeout(() => {
			setFade(true);
		}, 500);
	};
	const handleClickAbstract = () => {
		setFade(false);
		setTimeout(() => {
			setfilteredPics(abstract);
		}, 150);
		setTimeout(() => {
			setFade(true);
		}, 500);
	};

	const handleClickWater = () => {
		setFade(false);
		setTimeout(() => {
			setfilteredPics(water);
		}, 150);
		setTimeout(() => {
			setFade(true);
		}, 500);
	};

	const handleClickLife = () => {
		setFade(false);
		setTimeout(() => {
			setfilteredPics(life);
		}, 150);
		setTimeout(() => {
			setFade(true);
		}, 500);
	};

	const handleClickPortrait = () => {
		setFade(false);
		setTimeout(() => {
			setfilteredPics(portrait);
		}, 150);
		setTimeout(() => {
			setFade(true);
		}, 500);
	};

	return (
		<section className="gallerytabs">
			<Container className="my-shuffle-container">
				<Row>
					<Col>
						<div>
							<ul className="list text-center">
								<Button
									className="galleryButtons"
									onClick={handleClickAll}
								>
									All
								</Button>
								<Button
									className="galleryButtons"
									onClick={handleClickPortrait}
								>
									Portrait
								</Button>
								<Button
									className="galleryButtons"
									onClick={handleClickAbstract}
								>
									Abstract
								</Button>
								<Button
									className="galleryButtons"
									onClick={handleClickWater}
								>
									Water
								</Button>
								<Button
									className="galleryButtons"
									onClick={handleClickLife}
								>
									Life
								</Button>
								<Button
									className="galleryButtons"
									onClick={handleClickJazz}
								>
									Jazz
								</Button>
							</ul>
						</div>
					</Col>
				</Row>
				<Fade in={fade} appear={true}>
					<Row className="shufflePics justify-content-md-center">
						{filteredPics &&
							filteredPics.map(pic => (
								<>
									<div
										id={pic.id}
										className="card col-xs-12 col-sm-6 col-md-3"
										category={pic.category}
									>
										<div
											id={pic.id}
											className="img-container"
										>
											<img
												id={pic.id}
												alt={pic.name}
												src={pic.image}
												rel="preload"
											/>
											<div class="midtransistion">
												<a
													class="text"
													onClick={() => {
														setModalShow(true);
														setCurrentPic({
															image: pic.image,
															title: pic.name
														});
													}}
												>
													<i class="fas fa-expand-arrows-alt circle-icon" />
												</a>
											</div>
										</div>
									</div>
								</>
							))}
					</Row>
				</Fade>
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
