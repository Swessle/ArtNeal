import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';

class App extends Component {
  state = {
    index: 0
  }
  render() {
    return (
      <Carousel controls={false} touch={false} slide={false} fade={true}>
        <Carousel.Item>
          Hello
        </Carousel.Item>
        <Carousel.Item>
          Hello
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default App;
