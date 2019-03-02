import React, { Component } from "react";
import LpNav from "../components/LandingPage/LpNav";
import SimpleSlide from "../components/LandingPage/Jumbotron";

class HomePage extends Component {
  render() {
    return (
      <div>
        <LpNav/>
        <SimpleSlide/>
        </div>

    );
  }
}

export default HomePage;
