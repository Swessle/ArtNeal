import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "../../pages/index.css"

const LocationTab = () => {
    return (
        <div>
            <Container >
                <Row>
                    <Col className="text-center">
                        <img src="https://via.placeholder.com/800x600" className="google-map" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LocationTab;