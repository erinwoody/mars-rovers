import React, { Component } from "react";
import GetImageButton from "./GetImageButton";
import ImageDisplay from "./ImageDisplay";
import axios from "axios";

const NASA_URL =
  "https://api.nasa.gov/planetary/apod?api_key=jcx1fZYmsLcNALvq28kg6AY451n1rMHJHzhMBZaL";

export default class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    };
  }

  handleRover = e => {
    this.setState({ rover: e.target.value });
  };

  handleCamera = e => {
    this.setState({ camera: e.target.value });
  };
  handleSol = e => {
    this.setState({ sol: e.target.value });
  };

  handleSubmit = e => {
    let { cam, rove } = this.state;
    let num = this.state.sol;  
    const API_KEY = "jcx1fZYmsLcNALvq28kg6AY451n1rMHJHzhMBZaL";

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    axios.get(imageUrl).then(response => {
      this.setState({images: response.data.photos});
    })
  }
   
  render() {
    return (
      <div className="image-form">
        <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" value={this.state.rove}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select
          onChange={this.handleCamera}
          id="rover"
          value={this.state.cam}
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
          value={this.state.num}
        />

        <GetImageButton handleClick={this.handleSubmit} />
        <ImageDisplay images={this.state.images} />    
      </div>
    );
  }
}
