import React, { Component } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

class AnimatedBackground extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }

  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      minHeight: 800.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef} style={{position: "absolute", width: "100%", height: "100vh"}}>
    </div>
  }
}

export default AnimatedBackground;
