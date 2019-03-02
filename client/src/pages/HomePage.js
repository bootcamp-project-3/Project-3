import React, { Component } from "react";
import LpNav from "../components/LandingPage/LpNav";
// import SimpleSlide from "../components/LandingPage/Jumbotron";
import Wrapper from "../components/LandingPage/Wrapper";
import Button from "../components/LandingPage/LpButton";


class HomePage extends Component {
  render() {
    return (
      <div>
        <LpNav />
        <Wrapper>   
          Be Neighborly. Sign Up 
        <Button />
        </Wrapper>





      </div >

    );
  }
}

export default HomePage;
