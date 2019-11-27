import React, {useState, useEffect} from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

import GalleryCard from '../GalleryCard'
import galleryPics from '../../Gallery.json'



const Gallery = () => {

	const [pics, setPics] = useState(galleryPics);
	const [filteredPics, setfilteredPics] = useState(null)

	
	var jazz = pics.filter((e) => e.category === "Jazz")
	var portrait = pics.filter((e)=> e.category === "Portrait")
	var abstract = pics.filter((e)=> e.category === "Abstract")
	var water = pics.filter((e)=> e.category === "Nautical")
	var life = pics.filter((e)=> e.category === "Life")
	  
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
	const handleClickAbstract = () =>{
		
		setfilteredPics(abstract)
	}

	const handleClickWater = () =>{
		
		setfilteredPics(water)
	}

	const handleClickLife = () =>{
		
		setfilteredPics(life)
	}

	const handleClickPortrait = () =>{
		
		setfilteredPics(portrait)
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
	
										<Button onClick={handleClickPortrait}>Portrait</Button>
										<Button onClick={handleClickAbstract}>Abstract</Button>
										<Button onClick={handleClickWater}>Water</Button>
										<Button onClick={handleClickLife}>Life</Button>
										<Button onClick={handleClickJazz}>Jazz</Button>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
				<Row className='shufflePics'>
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
