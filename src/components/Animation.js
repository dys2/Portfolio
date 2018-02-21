import React from 'react';
import {
  renderer,
  animObj,
  setWidthAndHeight,
  setSpotLightColor,
  size,
  resetCamera,
  cameraRender,
  setSpeakers,
  setAnimate,
  setMoon,
  setPartyText,
  setText,
  setPlane,
  setSpotLight,
  setOpacity,
  setLightColor
} from '../animation-utils';


export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.resize = this.resize.bind(this);
  }
  componentDidMount() {
    setWidthAndHeight(
      window.innerWidth,
      window.innerWidth * 9/16
    );
    setSpeakers();
    setText();
    setMoon();
    setPlane();
    setSpotLight();
    setPartyText();
    setSpotLightColor();
    cameraRender();
    renderer(window.devicePixelRatio);
    this.mount.appendChild(animObj.renderer.domElement);
    window.addEventListener('resize', this.resize);
    if (!window.fake) this.start();
  }
  componentWillUnmount() {
    this.stop();
    window.removeEventListener('mousedown', this.onDocumentMouseDown);
    window.removeEventListener('touchstart', this.onDocumentTouchStart);
    window.removeEventListener('resize', this.resize);
    this.mount.removeChild(animObj.renderer.domElement);
  }
  start() {
    if (!this.frameId) this.frameId = requestAnimationFrame(this.animate);
  }
  stop() {
    cancelAnimationFrame(this.frameId);
  }
  resize() {
    setWidthAndHeight(
      window.innerWidth,
      window.innerWidth * 9/16
    );
    resetCamera();
  }
  animate(timestamp) {
    this.renderScene();
    setAnimate();
    if (window.scrollY >= this.mount.offsetTop - window.innerHeight
      && window.scrollY < this.mount.offsetTop + this.mount.offsetHeight)
      setTimeout(() => this.frameId = window.requestAnimationFrame(this.animate), 1000 / 30 );
    else
      setTimeout(() => this.frameId = window.requestAnimationFrame(this.animate), 2000 );
  }
  renderScene() {
    animObj.renderer.render(animObj.scene, animObj.camera);
  }
  onPlay() {
    if (animObj.play) animObj.audio.play();
    else animObj.audio.pause();
  }
  render() {
    return (
      <div onClick={() => {
          animObj.play = !animObj.play;
          animObj.music = !animObj.music;
          this.onPlay();
        }}
        style={{
          position: 'relative', 
          zIndex: 99,
          width: window.innerWidth,
          height: window.innerWidth * 9/16,
          cursor: 'pointer'
        }}
        ref={(mount) => this.mount = mount }
      >
      </div>
    )
  }
}