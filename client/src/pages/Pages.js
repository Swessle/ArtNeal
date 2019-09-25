import React, { Component } from "react";
import Fade from 'react-bootstrap/Fade'
import Home from "../components/Home";
import About from "../components/About";
import { connect } from "react-redux";

class Pages extends Component {
  state = {
    index: 0
  }
  render() {
    return (
      <div>
        <Fade mountOnEnter={true} unmountOnEnter={true} appear={true} in={this.state.index === 0 ? true : false}>
          <Home/>
        </Fade>
        <Fade mountOnEnter={true} unmountOnEnter={true} appear={true} in={this.state.index === 1 ? true : false}>
          <About/>
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  slide: state.index
})

export default connect(mapStateToProps)(Pages);
