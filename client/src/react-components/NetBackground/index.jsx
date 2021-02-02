import React, { Component } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

class NetBackground extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }

  componentDidMount() {
    this.vantaEffect = NET({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 1500.00,
        minWidth: 1500.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3f6eff,
        points: 14.00,
        spacing: 18.00,
        THREE: THREE
      })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef} style={{position: "absolute", width: "100%", height: "100%"}}>
    </div>
  }
}

export default NetBackground;
