import React from "react";
import { Container, Row, Col, } from 'react-bootstrap'
import '../../pages/index.css'
import Image from '../../pages/assets/images/Neal.JPG'

const AboutTab = () => {
    return (
        <Container id="aboutContainer">
            <Row>
                <Col>
                    <img src={Image} className="pull-left about-img" id="nealImage" />
                    <p id="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu. Aliquam nulla facilisi cras fermentum odio. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Integer quis auctor elit sed. Venenatis urna cursus eget nunc scelerisque. Ac feugiat sed lectus vestibulum mattis. Ac odio tempor orci dapibus. Augue mauris augue neque gravida in fermentum. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Curabitur gravida arcu ac tortor dignissim. Tempus quam pellentesque nec nam. Diam quam nulla porttitor massa id neque. Leo in vitae turpis massa sed elementum tempus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus.
                       Adipiscing elit ut aliquam purus sit amet luctus venenatis. Nunc sed id semper risus in hendrerit gravida. Pulvinar etiam non quam lacus. Mauris sit amet massa vitae tortor. Lacus luctus accumsan tortor posuere ac ut. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Gravida dictum fusce ut placerat orci. Pharetra convallis posuere morbi leo urna molestie at elementum. Eget gravida cum sociis natoque penatibus et magnis dis. Velit sed ullamcorper morbi tincidunt ornare massa.Adipiscing elit ut aliquam purus sit amet luctus venenatis. Nunc sed id semper risus in hendrerit gravida. Pulvinar etiam non quam lacus. Mauris sit amet massa vitae tortor. Lacus luctus accumsan tortor posuere ac ut. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Gravida dictum fusce ut placerat orci. Pharetra convallis posuere morbi leo urna molestie at elementum. Eget gravida cum sociis natoque penatibus et magnis dis.</p>
                </Col>
            </Row>
            <Row className="pt-5 pb-5">
                <Col className="text-center">
                    <img src='https://place-hold.it/700x400/black/white.jpg&text=Location?&fontsize=20' id="locationImage" />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutTab;