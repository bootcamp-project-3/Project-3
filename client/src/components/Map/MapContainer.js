import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "200pt",
  height: "200pt",
  position: "static",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 43.07572,
          lng: -70.76075,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBN5USFc8rz55C_UuHVfJvJPuss7JG_0kI",
})(MapContainer);
