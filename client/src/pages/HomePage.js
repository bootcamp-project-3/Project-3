import React, { Component } from "react";
import LpNav from "../components/LandingPage/LpNav";
// import SimpleSlide from "../components/LandingPage/Jumbotron";
import Wrapper from "../components/LandingPage/Wrapper";
import Button from "../components/LandingPage/LpButton";
import Styled from "styled-components";
import Image from "../components/LandingPage/assets/neighborhood.jpg";

const Background = Styled.main`
  background: url(${Image}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

const Spacer = Styled.div`
    height: 300px;
`;

class HomePage extends Component {
  render() {
    return (
      <Background>
        <div>
          <LpNav />
          <Wrapper>
            Be Neighborly. Sign Up
            <Button />
          </Wrapper>
          <Spacer></Spacer>
        </div>
      </Background>
    );
  }
}

export default HomePage;
