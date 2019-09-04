import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import Home from "./components/Home";
import About from "./components/About";


class App extends Component {
  state = {
    index: 0
  }
  render() {
    return (
      <Carousel controls={false} touch={false} slide={false} fade={true}>
        <Carousel.Item>
          <Home/>
        </Carousel.Item>
        <Carousel.Item>
          <About/>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default App;
