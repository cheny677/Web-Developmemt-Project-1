import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./styles.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayButton: false,
      showFullscreenButton: true,
      showGalleryFullscreenButton: false,
      showGalleryPlayButton: false,
      showVideo: {},
      // images: [],
    };
    let lst = this.props.images;
    let temp = [];
    for (let i = 1; i < lst.length; i++) {
      // temp.push({ original: lst[i], thumbnail: lst[i] });
      temp.push({ original: lst[i], thumbnail: lst[i] });
    }
    console.log(33);
    console.log(temp);
    this.images = temp;
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo,
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  _onImageClick(event) {
    console.log("clicked on image");
  }

  render() {
    return (
      <ImageGallery
        items={this.images}
        onClick={this._onImageClick.bind(this)}
        showFullscreenButton={this.state.showFullscreenButton}
        showPlayButton={this.state.showPlayButton}
      />
    );
  }
}

export default Gallery;
