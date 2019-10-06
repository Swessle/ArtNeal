import React, { Component } from "react";
import Fade from 'react-bootstrap/Fade'
import Home from "../components/Home";
import About from "../components/About";
import { connect } from "react-redux";


class Pages extends Component {
  
  state = {
    home: true,
    about: false,
    gallery: false,
    contact: false
  }
  componentDidMount() {
    console.log(this.props.slide.index);
  }
  componentDidUpdate() {
    switch (this.props.slide.index) {
      case 0:
        return this.setState({
          home: true,
          about: false,
          gallery: false,
          contact: false
        })
      case 1:
        return this.setState({
          home: false,
          about: true,
          gallery: false,
          contact: false
        })
    }
  }
  render() {
    return (
      <div>
        <Fade appear={false} in={this.state.home}>
          <Home/>
        </Fade>
        <Fade appear={false} in={this.state.about}>
          <About/>
        </Fade>
        <Fade appear={false} in={this.props.slide.index === 3 ? true : false}>
          <About/>
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  slide: state.slide
})

export default connect(mapStateToProps)(Pages);
