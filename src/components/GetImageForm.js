import React, { Component } from "react";
import GetImageButton from "./GetImageButton";
import ImageDisplay from "./ImageDisplay";
import axios from "axios";

const API_KEY = "jcx1fZYmsLcNALvq28kg6AY451n1rMHJHzhMBZaL";
const URL_QUERY = "?api_key";
const NASA_URL = "https://api.nasa.gov/planetary/apod";

export default class GetImageForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Curiosity' };

        this.handleSol = this.handleSol.bind(this);
        this.handleRover = this.handleRover.bind(this);
        this.handleCamera = this.handleCamera.bind(this);
    }
  handleSol(e) {
    this.setState({ value: e.target.value});
  }

  handleRover(e) {
      this.setState({ value: e.target.value});
  }
  
  handleCamera(e) {
      this.setState({ value: e.target.value });
  }
    
  render() {
    return (
      <div>
        <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" value={this.state.value}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select
          onChange={this.handleCamera}
          id="rover"
          value={this.state.value}
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
          value={this.state.value}
        />

        <GetImageButton />
        <ImageDisplay />
      </div>
    );
  }
}
