import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "./index.css"


import GoogleMap from '../GoogleMap'

const LocationTab = () => {
    return (
        <div>
            <Container >
                <Row>
                    <Col className="text-center">
                        {/* <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyCtgxR0vbtZ6iNNTsgymTEz2VAqyz240yI" className="google-map" /> */}
                        <h1>Art Gallery Location</h1>
                        <h3>Address Here</h3>

                        
                       
                    </Col>
                </Row>
            </Container>
            <GoogleMap/>
        </div>
    )
}

export default LocationTab;