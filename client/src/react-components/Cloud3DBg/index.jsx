import React, { Component } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";

class AnimatedBackground extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = CLOUDS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      minHeight: 700.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      THREE: THREE,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return <div ref={this.vantaRef}></div>;
  }
}

export default AnimatedBackground;
