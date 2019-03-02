import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Card from "../components/Card/Card";

class Bulletin extends Component {
  render() {
    return (
      <main>
        <SideBar />
        <Card />
      </main>
    );
  }
}

export default Bulletin;
