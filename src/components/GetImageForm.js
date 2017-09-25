import React, { Component } from "react";
import axios from "axios";
import GetImageButton from "./GetImageButton";
import ImageDisplay from "./ImageDisplay";

export default class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "1000"
    };

  }
  handleSubmit = e => {
    let { camera, rover, sol } = this.state;
    const API_KEY = "VXGr4f5Kq6RJ15rPvQIKs1Dt8teBQptDPtcoHKuc";
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`;

    axios.get(imageUrl).then(response => {
      console.log("response: ", response);
      this.setState({ images: response.data.photos });

    });
  };

  handleRover = e => {
    this.setState({ rover: e.target.value });
  };

  handleCamera = e => {
    this.setState({ camera: e.target.value });
  };
  handleSol = e => {
    this.setState({ sol: e.target.value });
  };

  render() {
    return (
      <div>
        <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" value={this.state.rover}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select
          onChange={this.handleCamera}
          id="rover"
          value={this.state.camera}
        >
          <option value="fhaz">FHAZ (Front Hazard)</option>
          <option value="rhaz">RHAZ (Rear Hazard)</option>
          <option value="navcam">NAVCAM (Navigation Cam)</option>
        </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input
          type="number"
          onChange={this.handleSol}
          max="2000"
          min="1000"
          value={this.state.sol}
        />

        <GetImageButton handleClick={this.handleSubmit} />

        <ImageDisplay images={this.state.images} />
      </div>
    );
  }
}
