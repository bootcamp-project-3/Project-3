import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import zipcodes from "zipcodes";

const mapStyles = {
  width: "200pt",
  height: "200pt",
  position: "static",
};

export class MapContainer extends Component {
  state = {
    latitude: "",
    longitude: "",
  };

  getCity = () => {
    fetch("/api/session", {
      method: "Get", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "client", // no-referrer, *client
    })
      .then(res => res.json())
      .then(
        result => {
          // Update the state with the users session data
          // Get the users messages and update the state
          const zip = result.data.loc;
          const data = zipcodes.lookup(zip);
          this.setState({ latitude: data.latitude, longitude: data.longitude });
          console.log(this.state)
        },
        error => {
          console.log(error);
        }
      );
  };

  componentDidMount = () => {
    this.getCity();
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        center={{
          lat: this.state.latitude,
          lng: this.state.longitude,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBN5USFc8rz55C_UuHVfJvJPuss7JG_0kI",
})(MapContainer);
