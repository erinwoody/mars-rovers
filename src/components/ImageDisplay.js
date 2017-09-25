import React, { Component } from "react";

export default class ImageDisplay extends Component {
  render() {
    let images = this.props.images.map((image, index) => (
      <div key={index}>
        <img src={image["img_src"]} />
      </div>
    ));
    console.log("images: ", images);

    return <div>{images}</div>;
  }
}
