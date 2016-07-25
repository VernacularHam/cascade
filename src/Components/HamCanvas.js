import React, { Component } from 'react';
import './HamCanvas.css';

class HamCanvas extends Component {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
  }

  //Hook up a 60ms timer function
  //hook to the drawframe, only draw frame if minimum time has elapsed, then reset timer
  componentDidMount() {
    //draw initial state
    this.updateCanvas();
    //start drawtimer
    this.interval = this.setInterval(this.draw, 60);
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    let context = this.refs.canvas.getContext('2d');
    //draw stuff
  }

  draw() {
    //update state values that will cause component to update and thus render
  }

  render() {
    return (
      <div className="HamCanvas">
        <canvas ref="canvas"></canvas>
      </div>
    );
  }
}

export default HamCanvas;