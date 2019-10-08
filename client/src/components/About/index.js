import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AboutTab from './AboutTab'
import LocationTab from './LocationTab'

const About = () => {
    return (
        <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
            <Tab eventKey="about" title="About">
                <AboutTab/>
            </Tab>
            <Tab eventKey="location" title="Location">
                <LocationTab/>
            </Tab>
        </Tabs>
    )


}

export default About;