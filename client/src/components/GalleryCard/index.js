import React from "react";
import "./style.css";
import {  Modal } from "react-bootstrap";

function GalleryCard(props) {
	return (

			<div id={props.id} className="img-container">
				<img
					id={props.id}
					alt={props.name}
					src={props.image}
					rel="preload"
				/>
				<div class="midtransistion">
    				<a href="#" class="text"><i class="fas fa-plus circle-icon"></i></a>
  				</div>
			</div>
			

	);
}

export default GalleryCard;
