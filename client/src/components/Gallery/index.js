import React, {useState, useEffect} from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

import GalleryCard from '../GalleryCard'
import galleryPics from '../../Gallery.json'



const Gallery = () => {

	const [pics, setPics] = useState(galleryPics);
	const [filteredPics, setfilteredPics] = useState(null)

	
	var jazz = pics.filter((e) => e.category === "Jazz")
	var nude = pics.filter((e)=> e.category === "Nude")
	  
	useEffect(()=>{
		setfilteredPics(pics)
	}, [])
	

	const handleClickAll = () =>{
		
		setfilteredPics(pics)
		
	}
	const handleClickJazz = () =>{
		
		setfilteredPics(jazz)
		console.log(jazz)
	}
	const handleClickNude = () =>{
		
		setfilteredPics(nude)
	}


	return (
		<section className="gallerytabs">
			<Container className='my-shuffle-container'>
				<Row>
					<Col>
						<div className="gallfilter text-center">
							<ul className="list">
								<li>
										<Button onClick={handleClickAll}>All</Button>
	
										<Button onClick={handleClickNude}>Nude</Button>
								
										<Button onClick={handleClickJazz}>Jazz</Button>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
				<Row>
					{filteredPics && filteredPics.map((pic) =>(
						<GalleryCard
						image={pic.image}
						category={pic.category}
						/>
					))}
				</Row>
			</Container>
		</section>
	)
};

 
export default Gallery;
